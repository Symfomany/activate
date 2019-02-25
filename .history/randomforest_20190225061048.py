import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn import datasets


corpus = ["The apple is on sale", "The oranges in on sale",
          "The apple and is present", "The orange and is present"]
Y = np.array([1, 2, 1, 2])

vectorizer = CountVectorizer(min_df=1)
X = vectorizer.fit_transform(corpus).toarray()

clf = RandomForestClassifier()
clf.fit(X, Y)
clf.predict(vectorizer.transform([‘apple is present’]).toarray())
