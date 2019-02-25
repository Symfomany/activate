import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn import datasets


corpus = ["The apple is on sale", "The oranges in on sale",
          "The apple and is present", "The orange and is present"]
Y = np.array([1, 2, 1, 2])
