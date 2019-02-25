from sklearn.neighbors import KNeighborsClassifier


X = [[0], [1], [2], [3]]
y = [1, 0, 1, 1]
neigh = KNeighborsClassifier(n_neighbors=3)
neigh.fit(X, y)
print(neigh.predict([[1.1]]))
print(neigh.predict_proba([[0.9]]))
