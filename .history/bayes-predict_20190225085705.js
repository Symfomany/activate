const bayes = require('bayes')
const notifier = require('node-notifier');
const model = require('./model.json')

const revivedClassifier = bayes.fromJson(model)

var args = process.argv.slice(2);

if (!args) throw new Error("Aucun argument de sentence")

if (args) {
    const sentence = args.split('=')
    if (!sentence) {
        throw new Error("Votre argument est incorrect ! Ex: sentence=J'ai une fuite de gaz")
    }
    const category = revivedClassifier.categorize("J'ai une urgence dans mon salon")
    console.log(category);
    switch (key) {
        case value:

            break;

        default:
            break;
    }

    notifier.notify({
        title: "Prédiction de l'urgence",
        message: 'Hello, there!'
    });
}
