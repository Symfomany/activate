const fs = require('fs')
const bayes = require('bayes')
const csv = require('fast-csv')

const stream = fs.createReadStream("sentences.csv");

const classifier = bayes()

// its a streaming, line by line
const csvStream = csv()
    .on("data", function (datas) {
        console.log(parseInt(datas[1].trim()));

        // const datas = data.split(';')
        // console.log(datas);

        classifier.learn(datas[0], datas[1])
    })
    .on("end", function () {

        const category = classifier.categorize("J'ai une ampoule cassée")
        console.log(category);

        // serialize the classifier's state as a JSON string.
        const stateJson = classifier.toJson()

        // load the classifier back from its JSON representation.
        const revivedClassifier = bayes.fromJson(stateJson)
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