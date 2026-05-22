import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

print("Current Folder:")
print(os.getcwd())

print("Loading dataset...")

data = pd.read_csv("crop_dataset.csv")

print("Dataset Loaded Successfully")
print(data.head())

X = data.drop("label", axis=1)

y = data["label"]

print("Training model...")

model = RandomForestClassifier()

model.fit(X, y)

print("Saving model...")

joblib.dump(model, "crop_model.pkl")

print("Model Saved Successfully")