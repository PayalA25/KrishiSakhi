from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)

CORS(app)

# =========================================
# Load Crop Recommendation Model
# =========================================

crop_model = joblib.load(
    "crop_recommendation/crop_model.pkl"
)

# =========================================
# Load Fertilizer Recommendation Model
# =========================================

fertilizer_model = joblib.load(
    "fertilizer_recommendation/fertilizer_model.pkl"
)

soil_encoder = joblib.load(
    "fertilizer_recommendation/soil_encoder.pkl"
)

crop_encoder = joblib.load(
    "fertilizer_recommendation/crop_encoder.pkl"
)

fertilizer_encoder = joblib.load(
    "fertilizer_recommendation/fertilizer_encoder.pkl"
)

# =========================================
# Home Route
# =========================================

@app.route("/")

def home():

    return jsonify({
        "message": "Krishi Sakhi Backend Running Successfully"
    })

# =========================================
# Crop Prediction Route
# =========================================

@app.route("/predict-crop", methods=["POST"])

def predict_crop():

    try:

        data = request.json

        features = np.array([[

            float(data["N"]),
            float(data["P"]),
            float(data["K"]),
            float(data["temperature"]),
            float(data["humidity"]),
            float(data["ph"]),
            float(data["rainfall"])

        ]])

        prediction = crop_model.predict(features)

        return jsonify({
            "recommended_crop": prediction[0]
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })

# =========================================
# Fertilizer Prediction Route
# =========================================

@app.route("/predict-fertilizer", methods=["POST"])

def predict_fertilizer():

    try:

        data = request.json

        soil = soil_encoder.transform([
            data["soilType"]
        ])[0]

        crop = crop_encoder.transform([
            data["cropType"]
        ])[0]

        features = np.array([[

            float(data["temperature"]),
            float(data["humidity"]),
            float(data["moisture"]),
            soil,
            crop,
            float(data["nitrogen"]),
            float(data["potassium"]),
            float(data["phosphorous"])

        ]])

        prediction = fertilizer_model.predict(
            features
        )

        fertilizer = fertilizer_encoder.inverse_transform(
            prediction
        )

        return jsonify({
            "recommended_fertilizer": fertilizer[0]
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })

# =========================================
# Irrigation Prediction Route
# =========================================

@app.route("/predict-irrigation", methods=["POST"])

def predict_irrigation():

    try:

        data = request.json

        temperature = float(data["temperature"])
        humidity = float(data["humidity"])
        rainfall = float(data["rainfall"])
        moisture = float(data["moisture"])

        # Rule-Based Logic

        if temperature > 35 and humidity < 40:

            recommendation = (
                "Water crops every 1 day"
            )

        elif rainfall > 200:

            recommendation = (
                "No irrigation needed"
            )

        elif moisture < 30:

            recommendation = (
                "Water crops every 2 days"
            )

        elif humidity > 80:

            recommendation = (
                "Water crops every 5 days"
            )

        else:

            recommendation = (
                "Water crops every 3 days"
            )

        return jsonify({
            "irrigation_recommendation":
            recommendation
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })

# =========================================
# Run Flask App
# =========================================

if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True,
        use_reloader=False
    )