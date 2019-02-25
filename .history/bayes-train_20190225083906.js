const fs = require('fs')
const bayes = require('bayes')
const csv = require('fast-csv')
const notifier = require('node-notifier');


const stream = fs.createReadStream("sentences.csv");

const classifier = bayes()

// its a streaming, line by line
const csvStream = csv()
    .on("data", function (datas) {
        const nb = parseInt(datas[1].trim());
        const sentence = (datas[0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim());
        classifier.learn(sentence, nb)
    })
    .on("end", function () {
        const stateJson = classifier.toJson()
        const json = JSON.stringify(stateJson);
        fs.writeFile('./train.json', json, 'utf8', () => console.log("Trained Finished"));
    });

stream.pipe(csvStream);



// teach it positive phrases

// classifier.learn('amazing, awesome movie!! Yeah!! Oh boy.', 'positive')
// classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive')
// // teach it a negative phrase

// classifier.learn('terrible, shitty thing. Damn. Sucks!!', 'negative')

// // now ask it to categorize a document it has never seen before

// classifier.categorize('awesome, cool, amazing!! Yay.')
// // => 'positive'

// // serialize the classifier's state as a JSON string.
// const stateJson = classifier.toJson()

// // load the classifier back from its JSON representation.
// const revivedClassifier = bayes.fromJson(stateJson)