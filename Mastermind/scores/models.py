from django.db import models

# Create your models here.
class Score(models.Model):
    name = models.CharField(max_length=100)
    score = models.IntegerField(default=0)
