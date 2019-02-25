###
# Handle Data: Open the dataset from CSV and split into test/train datasets.
# Similarity: Calculate the distance between two data instances.
# Neighbors: Locate k most similar data instances.
# Response: Generate a response from a set of data instances.
# Accuracy: Summarize the accuracy of predictions.
# Main: Tie it all together.
###

import csv
with open('iris.data.csv', 'rb') as csvfile:
    lines = csv.reader(csvfile)
    for row in lines:
        print(', '.join(row))
