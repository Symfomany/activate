const bayes = require('bayes')
const notifier = require('node-notifier');
const model = require('./model.json')

const revivedClassifier = bayes.fromJson(model)

var args = process.argv.slice(2);
if (args) {
    const sentence = args.split('=')[0]
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
