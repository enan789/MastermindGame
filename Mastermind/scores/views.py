from django.shortcuts import render
from scores.models import Score
from scores.serializers import ScoreSerializer
from rest_framework import generics

class ScoreListCreate(generics.ListCreateAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
