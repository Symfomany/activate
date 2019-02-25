const functions = require("firebase-functions");
const {
    dialogflow,
    Suggestions,
    BasicCard,
    BrowseCarousel,
    BrowseCarouselItem,
    MediaObject,
    SimpleResponse,
    Image,
    Permission
} = require("actions-on-google");


const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


const app = dialogflow({
    debug: true,
    clientId:
        "998005817331-jhodd6ogegl9g17ca30beogulvue03ep.apps.googleusercontent.com"
});

const textOnly = speech => speech.replace(/<\/?[^>]+(>|$)/gi, "");

const updateData = (userId, data) => new Promise((resolve, reject) => {
    const base = admin.database().ref(`/`);
    const user = base.child(userId);
    user.update(data, (error) => {
        resolve(true)
    })
})

/**
 * Default Intent
 */
app.intent("Default Welcome Intent", conv => {
    const speech = `<speak>Bienvenue sur l'application *Job de Développeur*,<break time='300ms'/>  la 1ère Application de mise en relation entre développeur et recruteurs. <break time='500ms'/> 
Tu cherches nouvelle mission ?<break time='200ms'/> Une nouvelle opportunité de développeur ?<break time='600ms'/> 
Avec notre application, tu seras directement mis en relation pour un entretien technique,<break time='300ms'/> en moins de 24h et autour de chez toi. <break time='500ms'/>
Peux-tu nous dire les technologies ou langages que tu recherches ?</speak>`
    // conv.ask(new SimpleResponse({
    //     speech: speech,
    //     text: textOnly(speech)
    // }));

    conv.ask(new BasicCard({
        text: `This is a basic card.  Text in a basic card can include "quotes" and
        most other unicode characters including emoji 📱.  Basic cards also support
        some markdown formatting like *emphasis* or _italics_, **strong** or
        __bold__, and ***bold itallic*** or ___strong emphasis___ as well as other
        things like line  \nbreaks`, // Note the two spaces before '\n' required for
        // a line break to be rendered in the card.
        subtitle: 'This is a subtitle',
        title: 'Title: this is a title',
        buttons: new Button({
            title: 'This is a button',
            url: 'https://assistant.google.com/',
        }),
        image: new Image({
            url: 'https://example.com/image.png',
            alt: 'Image alternate text',
        }),
        display: 'CROPPED',
    }));

    conv.ask(new Suggestions(["PHP", "Javascript", "Python", "Swift", "C++", "Java", "Kotlin", "Rust"]));
});


/**
 * Skills
 */
app.intent("Skills", async (conv, { skills }) => {
    console.log("************************************* Skill Normal *************************************")

    const userId = conv.user.id;
    // in session
    // conv.user.storage.userId = userId
    await updateData(userId, {
        "languages": skills,
        "step": 1,
        "created": new Date()
    });
    conv.ask(`<speak> Superbe ! <break time='500ms'/> 
                Peux-tu nous dire dans quelle ville tu recherches ton futur job de développeur? </speak>`);
    conv.ask(new Suggestions(["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nantes", "Strasbourg", "Montpellier"]));
});

app.intent("City", async (conv, { city }) => {
    const userId = conv.user.id;

    conv.user.storage.city = city
    await updateData(userId, {
        "city": city,
        "step": 2
    });
    conv.ask(`<speak>Impeccable ! Nous recherchons sur ${city} les meilleurs offres actuellement disponibles. <break time='500ms'/> 
        Combien d'années d'experiences as-tu au total dans ces techs ? </speak>`);
    conv.ask(new Suggestions(["1 an", "3 années", "Moins de 5 ans", "Plus de 5 ans", "Plus de 10 ans", "Junior", "Confirmé", "Senior"]));
});


app.intent("Level", async (conv, { level }) => {
    const userId = conv.user.id;
    console.log(level);
    await updateData(userId, {
        "level": level,
        "step": 3
    });
    conv.ask(`<speak>Génial ! <break time='500ms'/> 
        Peux-tu partager ton numéro de téléphone, <break time='200ms'/> afin de te mettre directement en relation avec un recruteur technique ? Attention, c'est à toi ... </speak>`);
    conv.ask(new Suggestions(["Exemple: 0612345678"]));
});


app.intent("Tel", async (conv, { tel }) => {

    const userId = conv.user.id;
    const nb = Math.floor((Math.random() * 100) + 10);

    let speech = `<speak> C'est parfait!<break time='500ms'/> Actuellement, il y a ${nb} opportunités de développeur disponibles sur ${conv.user.storage.city}. <break time='300ms'/>  
    Si tu as aimé cette application, n'hésites pas à mettre une petite note sur Google Assistant.<break time='500ms'/> 
    Bon courage pour ton rendez-vous technique et à bientôt! </speak>`

    if (tel.trim().length > 2) {
        await updateData(userId, {
            "tel": "0" + tel,
            "step": 4
        });
        speech = `<speak> C'est parfait!<break time='500ms'/> Actuellement, il y a ${nb} opportunités de développeur disponibles sur ${conv.user.storage.city}. <break time='300ms'/>  
Tu seras rapidement mise en relation avec une entreprise, afin de convenir un entretien technique. <break time='1000ms'/>
Si tu as aimé cette application, n'hésites pas à mettre une petite note sur Google Assistant.<break time='500ms'/> 
Bon courage pour ton rendez-vous technique et à bientôt! </speak>`
    }

    conv.close(new SimpleResponse({
        speech: speech,
        text: textOnly(speech)
    }));
    conv.close(new MediaObject({
        name: "Conseils de Développeur",
        url: 'https://firebasestorage.googleapis.com/v0/b/console-28d14.appspot.com/o/interview.mp3?alt=media&token=b18b3a05-f234-4a1d-87ff-e521b0724dc7',
        description: "Petits conseils pour préparer les entretiens d'embauche pour développeur",
        icon: new Image({
            url: 'https://www.informatiquenews.fr/wp-content/uploads/2018/09/17-developpeur-Une.jpg',
            alt: 'Album cover of an ccean view',
        }),
    }));
    // conv.close(new MediaObject({
    //     name: "Petit conseils pour entretien d'embauche de Développeur",
    //     url: 'https://firebasestorage.googleapis.com/v0/b/console-28d14.appspot.com/o/interview.mp3?alt=media&token=b18b3a05-f234-4a1d-87ff-e521b0724dc7',
    //     description: "Vous postulez en tant que développeur ? Quels sont les 7 erreurs à éviter face au recruteur technique lors de vos entretiens d'embauche ? ",
    // }));


});

app.intent("Default Fallback Intent", async (conv) => {

    const userId = conv.user.id;
    console.log("************************************* Fallback *************************************")
    await updateData(userId, {
        "step": null,
    });

    conv.ask(`<speak> Pas mal ! <break time='500ms'/> 
                Peux-tu nous dire dans quelle ville tu recherches ton futur job de développeur? </speak>`);
    conv.ask(new Suggestions(["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nantes", "Strasbourg", "Montpellier"]));

});

app.intent("RepeatIntent", conv => {
    conv.ask(`<speak> Peux-tu partager ton numéro de téléphone afin que l'on puisse te mettres en relation directement avec un recruteur technique ?</speak>`);
});

app.intent("StopIntent", conv => {

    const userId = conv.user.id;
    const base = admin.database().ref(`/`);
    const user = base.child(userId);
    user.update({
        "interrupt": true,
    });

    return conv.close(
        `<speak> 
            Merci à toi et à bientôt pour de nouvelles missions!
        </speak>`
    );
});

app.intent('actions.intent.CANCEL', (conv) => {
    return conv.close(
        `<speak> 
            Merci à toi et à bientôt pour de nouvelles missions!
        </speak>`
    );
});

app.intent("HelpIntent", conv => {
    return conv.ask(
        `<speak> 
          <break time='300ms'/>
          Peux-tu me donner le nom de la ville auquel tu cherches un job de développeur? 
        </speak>`
    );
});


exports.app = functions.https.onRequest(app);
