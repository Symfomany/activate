const fs = require('fs')
const bayes = require('bayes')
const csv = require('fast-csv')

const stream = fs.createReadStream("sentences.csv");

const classifier = bayes()

// its a streaming, line by line
const csvStream = csv()
    .on("data", function (datas) {
        const nb = parseInt(datas[1].trim());
        const sentence = (datas[0].trim());
        console.log(sentence);
        const revivedClassifier = bayes.fromJson(stateJson)
        // const datas = data.split(';')
        // console.log(datas);

        classifier.learn(sentence, nb)
    })
    .on("end", function () {
        //finished
        // const category = classifier.categorize("J'ai une urgence dans mon salon")
        // console.log(category);

        // // serialize the classifier's state as a JSON string.
        // const stateJson = classifier.toJson()

        // load the classifier back from its JSON representation.

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