const fs = require('fs')
const bayes = require('bayes')
const revivedClassifier = bayes.fromJson("./train.json")
const category = revivedClassifier.categorize("J'ai une urgence dans mon salon")