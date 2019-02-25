const fs = require('fs')
const bayes = require('bayes')
const args = require('args')


const revivedClassifier = bayes.fromJson("./train.json")
const category = revivedClassifier.categorize("J'ai une urgence dans mon salon")

args
    .option('port', 'The port on which the app will be running', 3000)
    .option('reload', 'Enable/disable livereloading')
    .command('serve', 'Serve your static site', ['s'])

const flags = args.parse(process.argv)