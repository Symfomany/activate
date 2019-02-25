const bayes = require('bayes')
const stream = fs.createReadStream("sentences.csv");

const classifier = bayes()

// its a streaming, line by line
const csvStream = csv()
    .on("data", function (data) {
        console.log(data);
    })
    .on("end", function () {
        console.log("done");
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