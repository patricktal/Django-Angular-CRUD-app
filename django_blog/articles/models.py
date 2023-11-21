from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title

class Student(models.Model):
    name = models.CharField(max_length = 255)
    address = models.CharField(max_length = 255)
    fee = models.IntegerField()

class Tutorial(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)