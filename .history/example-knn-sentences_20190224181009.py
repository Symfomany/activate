###
# Handle Data: Open the dataset from CSV and split into test/train datasets.
# Similarity: Calculate the distance between two data instances.
# Neighbors: Locate k most similar data instances.
# Response: Generate a response from a set of data instances.
# Accuracy: Summarize the accuracy of predictions.
# Main: Tie it all together.
###
import math
import csv
import random


def loadDataset(filename, split, trainingSet=[], testSet=[]):
    with open(filename, 'r') as csvfile:
        lines = csv.reader(csvfile)
        dataset = list(lines)
        for x in range(len(dataset)-1):
            for y in range(4):
                dataset[x][y] = float(dataset[x][y])
            if random.random() < split:
                trainingSet.append(dataset[x])
            else:
                testSet.append(dataset[x])


trainingSet = []
testSet = []
loadDataset('iris.data', 0.66, trainingSet, testSet)
print('Train: ' + repr(len(trainingSet)))
print('Test: ' + repr(len(testSet)))


def euclideanDistance(instance1, instance2, length):
    distance = 0
    for x in range(length):
        distance += pow((instance1[x] - instance2[x]), 2)
    return math.sqrt(distance)


data1 = [2, 2, 2, 'a']
data2 = [4, 4, 4, 'b']
distance = euclideanDistance(data1, data2, 3)
print('Distance: ' + repr(distance))
