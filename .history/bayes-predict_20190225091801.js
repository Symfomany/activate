const bayes = require('bayes')
const notifier = require('node-notifier');
const model = require('./model.json')

const revivedClassifier = bayes.fromJson(model)

var args = process.argv.slice(2);

if (!args.length) throw new Error("Aucun argument de sentence ! ")

if (args) {
    const sentence = args[0].split('=')
    if (!sentence.length) throw new Error("Votre argument a un format incorrect ! Ex: sentence=J'ai une fuite de gaz")

    let intent = sentence[1].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim()
    const category = parseInt(revivedClassifier.categorize(intent))
    let critique = "Normal"
    switch (category) {
        case 0:
            critique = "Urgence"
            break;
        case 1:
            critique = "Normal"
            break;
        case 2:
            critique = "Basse"
            break;
        default:
            break;
    }
    notifier.notify({
        title: "Prédiction de l'urgence",
        message: critique
    });

    console.log(critique);
}
