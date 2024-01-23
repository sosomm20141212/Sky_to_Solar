from django.contrib import admin
from django.urls import path
from predict.views import model_predict_view  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', model_predict_view, name='model_predict'),  
]
