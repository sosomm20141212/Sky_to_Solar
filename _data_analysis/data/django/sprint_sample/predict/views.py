from django.shortcuts import render
from tensorflow.keras.models import load_model
from tensorflow.keras.applications import VGG16
import numpy as np
import cv2 as cv

model_path = "C:/work/sprint_sample/predict/model/20240118_categorical_model.h5"
model = load_model(model_path)

conv_base = VGG16(include_top=False, input_shape=(150, 150, 3))

def model_predict(image_np_array):
    x = cv.resize(image_np_array, (150, 150))
    x = x[:, :, :3]
    x = x.reshape(1, 150, 150, 3)

    x_trans = conv_base.predict(x)
    prediction = np.argmax(model.predict(x_trans))

    return prediction

def model_predict_view(request):
    if request.method == 'POST':
        image_file = request.FILES['image_file']
        image_np_array = cv.imdecode(np.frombuffer(image_file.read(), np.uint8), cv.IMREAD_COLOR)

        prediction = model_predict(image_np_array)

        return render(request, "index.html", {'prediction': prediction})
    
    return render(request, 'index.html', {'prediction': None})





