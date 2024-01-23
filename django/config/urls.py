from django.urls import path
# views.py에서 model_result 함수 호출
from predict.views import model_result

urlpatterns = [
    # React에서 Data를 받아올 경로 설정(경로, 함수, 이름)
    path('api/result', model_result, name='model_result')
]
