from django.db import models

# Create your models here.
class Score(models.Model):
    Name = models.CharField(max_length=100)
    Score = models.IntegerField(default=0)
