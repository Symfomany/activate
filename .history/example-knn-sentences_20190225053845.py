###
# Handle Data: Open the dataset from CSV and split into test/train datasets.
# Similarity: Calculate the distance between two data instances.
# Neighbors: Locate k most similar data instances.
# Response: Generate a response from a set of data instances.
# Accuracy: Summarize the accuracy of predictions.
# Main: Tie it all together.
###
import operator
import math
import csv
import random


def loadDataset(filename, split, trainingSet=[], testSet=[]):
    """
        Charhgement du Dataset
    """
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
    """
        Distance Euclidien = Racine(sum((Y-Y")2))
    """
    distance = 0
    for x in range(length):
        distance += pow((instance1[x] - instance2[x]), 2)
    return math.sqrt(distance)


data1 = [2, 2, 2, 'a']
data2 = [4, 4, 4, 'b']
distance = euclideanDistance(data1, data2, 3)
print('Distance: ' + repr(distance))


def getNeighbors(trainingSet, testInstance, k):
    """
        Get the neighbors by distance euclidienne
    """
    distances = []
    length = len(testInstance)-1
    for x in range(len(trainingSet)):
        dist = euclideanDistance(testInstance, trainingSet[x], length)
        distances.append((trainingSet[x], dist))
    distances.sort(key=operator.itemgetter(1))
    neighbors = []
    for x in range(k):
        neighbors.append(distances[x][0])
    return neighbors


trainSet = [[2, 2, 2, 'a'], [4, 4, 4, 'b']]
testInstance = [5, 1, 3, 'a']
k = 1
neighbors = getNeighbors(trainSet, testInstance, 1)
print(neighbors)


def getResponse(neighbors):
    """
        Get the neighbors and return the last class of neightboors
    """
    classVotes = {}
    print(neighbors)
    for x in range(len(neighbors)):
        response = neighbors[x][-1]
        if response in classVotes:
            classVotes[response] += 1
        else:
            classVotes[response] = 1
    sortedVotes = sorted(classVotes.items(),
                         key=operator.itemgetter(1), reverse=True)
    return sortedVotes[0][0]


neighbors = [[1, 1, 1, 'a'], [2, 2, 2, 'a'], [3, 3, 3, 'b']]
response = getResponse(neighbors)
print(response)


def getAccuracy(testSet, predictions):
    """ 
        Get the Accurency
    """
    correct = 0
    for x in range(len(testSet)):
        if testSet[x][-1] is predictions[x]:
            correct += 1
    return (correct/float(len(testSet))) * 100.0


testSet = [[1, 1, 1, 'a'], [2, 2, 2, 'a'], [3, 3, 3, 'b'], [
    2, 3, 2, 'a'], [2, 1, 2, 'a'], [4, 2, 3, 'a'], [3, 1, 2, 'a']]
predictions = ['a', 'a', 'a']
accuracy = getAccuracy(testSet, predictions)
print(accuracy)
