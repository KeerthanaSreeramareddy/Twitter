from django.db import models

class Cities(models.Model):
    name = models.CharField(max_length=32)
    woeid = models.IntegerField()
    
    def __str__(self):
        return self.name 
