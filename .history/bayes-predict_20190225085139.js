const bayes = require('bayes')
const args = require('args')
const notifier = require('node-notifier');
const model = require('./model.json')

const revivedClassifier = bayes.fromJson(model)
const category = revivedClassifier.categorize("J'ai une urgence dans mon salon")

args
    .option('sentence', "J'ai une énorme fuite de gaz", 'urgence')

const flags = args.parse(process.argv)

console.log(flags);
