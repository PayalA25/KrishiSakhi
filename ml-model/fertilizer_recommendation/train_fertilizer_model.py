import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib

print("Loading dataset...")

# Load Dataset
data = pd.read_csv(
    "fertilizer_dataset.csv"
)

print(data.head())

# Encode categorical columns

soil_encoder = LabelEncoder()
crop_encoder = LabelEncoder()
fertilizer_encoder = LabelEncoder()

data["Soil"] = soil_encoder.fit_transform(
    data["Soil"]
)

data["Crop"] = crop_encoder.fit_transform(
    data["Crop"]
)

data["Fertilizer"] = fertilizer_encoder.fit_transform(
    data["Fertilizer"]
)

# Features
X = data.drop(
    ["Fertilizer", "Remark"],
    axis=1
)

# Target
y = data["Fertilizer"]

print("Training model...")

# Create Model
model = RandomForestClassifier()

# Train Model
model.fit(X, y)

print("Saving model...")

# Save Model
joblib.dump(
    model,
    "fertilizer_model.pkl"
)

# Save Encoders
joblib.dump(
    soil_encoder,
    "soil_encoder.pkl"
)

joblib.dump(
    crop_encoder,
    "crop_encoder.pkl"
)

joblib.dump(
    fertilizer_encoder,
    "fertilizer_encoder.pkl"
)

print("Fertilizer Model Saved Successfully")