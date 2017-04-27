from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Board(models.Model):
    high_score = models.IntegerField(default=0)
    full_name = models.CharField(max_length=200)

    def submit(self, newScore, newName):
        a = Board(high_score=newScore, full_name=newName)
        a.save(force_insert=True)
        