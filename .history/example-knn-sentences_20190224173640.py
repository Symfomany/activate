###
# Handle Data: Open the dataset from CSV and split into test/train datasets.
# Similarity: Calculate the distance between two data instances.
# Neighbors: Locate k most similar data instances.
# Response: Generate a response from a set of data instances.
# Accuracy: Summarize the accuracy of predictions.
# Main: Tie it all together.
###
import pandas as pd
df = pd.read_csv('iris.data')
print(df.head())

for x in range(len(dataset)-1):
    for y in range(4):
        dataset[x][y] = float(dataset[x][y])
    if random.random() < split:
        trainingSet.append(dataset[x])
    else:
        testSet.append(dataset[x])
