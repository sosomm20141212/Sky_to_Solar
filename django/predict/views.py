from tensorflow.keras.models import load_model
from tensorflow.keras.applications import VGG16
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import numpy as np
import cv2 as cv
import os

model_path1 = "C:/git-push/solar/django/predict/model/model_sky.h5"
model_path2 = "C:/git-push/solar/django/predict/model/VGG16_14_model.h5"

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

# React에서 return 요청을 받으면 딥러닝 모델을 돌리고 필요한 데이터 전송
@csrf_exempt
def model_result(request):
    if request.method == 'POST':
        # Request를 받아서 모델 돌리는 과정
        image_file = request.FILES['file']
        image_np_array = cv.imdecode(np.frombuffer(image_file.read(), np.uint8), cv.IMREAD_COLOR)

        prediction = model_predict(image_np_array) + 1
        prediction = int(prediction)

        # Prediction이 나오게 된 유사 데이터 추출
        for res in range(14):
            if res == prediction-1:
                image_folder = "C:/git-push/solar/django/predict/static/images/category_"+str(res)
                image_list = os.listdir(image_folder)
                image_paths = [os.path.join("http://10.10.21.64:8000/static/images/category_"+str(res), img) for img in image_list]

                # Prediction과 유사 데이터 Return
                return JsonResponse({"result":prediction, "image_paths":image_paths})
    # Request에 오류 발생 시 에러 반환
    return JsonResponse({'error': 'Request Error'})



