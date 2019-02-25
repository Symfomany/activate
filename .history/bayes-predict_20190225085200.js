const bayes = require('bayes')
const notifier = require('node-notifier');
const model = require('./model.json')

const revivedClassifier = bayes.fromJson(model)
const category = revivedClassifier.categorize("J'ai une urgence dans mon salon")

var args = process.argv.slice(2);
console.log(args);
