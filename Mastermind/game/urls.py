from django.urls import path
from . import views

urlpatterns = [
    path('', views.index ),
    path('play', views.index ),
    path('scores', views.index ),
]
