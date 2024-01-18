from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=100, unique=True)
    notes = models.CharField(max_length=500)
    avatar = models.ImageField()
    stared = models.BooleanField()