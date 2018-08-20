from django.urls import path
from . import views

urlpatterns = [
    path('api/scores/', views.ScoreListCreate.as_view() ),
]
