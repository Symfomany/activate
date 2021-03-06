const bayes = require('bayes')
const args = require('args')
const notifier = require('node-notifier');
const model = require('model')

const revivedClassifier = bayes.fromJson(model)
const category = revivedClassifier.categorize("J'ai une urgence dans mon salon")

args
    .option('sentence', "J'ai une énorme fuite de gaz", 'urgence')
    .command('serve', 'Serve your static site', ['s'])

const flags = args.parse(process.argv)

console.log(flags);
