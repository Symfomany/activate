const bayes = require('bayes')
const notifier = require('node-notifier');
const model = require('./model.json')

const revivedClassifier = bayes.fromJson(model)

var args = process.argv.slice(2);

if (!args) throw new Error("Aucun argument de sentence")

if (args) {
    const sentence = args.split('=')
    if (!sentence) {
        throw new Error("Votre argument a un format incorrect ! Ex: sentence=J'ai une fuite de gaz")
    }
    const category = parseInt(revivedClassifier.categorize(sentence))
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
        message: `la criticité est ${critique}`
    });
}
