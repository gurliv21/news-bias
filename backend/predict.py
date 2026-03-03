import joblib

#load model and vectorization
model = joblib.load("bias_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

text= "Strong borders are important for national security"

#convert  text to number
X = vectorizer.transform([text])

prediction = model.predict(X)[0]
confidence = max(model.predict_proba(X)[0])

print("Prediction:", prediction)
print("Confidence:", round(confidence, 2))

print("Class probabilities:", model.predict_proba(X)[0])
print("Class order:", model.classes_)
