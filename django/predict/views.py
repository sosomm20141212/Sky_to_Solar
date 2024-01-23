from tensorflow.keras.models import load_model
from tensorflow.keras.applications import VGG16
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import numpy as np
import cv2 as cv

model_path1 = "C:/git-push/solar/django/predict/model/20240118_categorical_model.h5"
model_path2 = "C:/git-push/solar/django/predict/model/20240118_VGG16.h5"

model = load_model(model_path1)
conv_base = load_model(model_path2)

@csrf_exempt
def model_predict(image_np_array):
    x = cv.resize(image_np_array, (150, 150))
    x = x[:, :, :3]
    x = x.reshape(1, 150, 150, 3)

    x_trans = conv_base.predict(x)
    prediction = np.argmax(model.predict(x_trans))

    return prediction

@csrf_exempt
def model_result(request):
    if request.method == 'POST':
        image_file = request.FILES['file']
        image_np_array = cv.imdecode(np.frombuffer(image_file.read(), np.uint8), cv.IMREAD_COLOR)

        prediction = model_predict(image_np_array)
        prediction = int(prediction)

        return JsonResponse({"result":prediction})

    return JsonResponse({'error': 'eeeeeeeeeeeeeeeeeeror'})



