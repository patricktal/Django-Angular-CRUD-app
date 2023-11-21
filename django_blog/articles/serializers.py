from rest_framework import serializers
from articles.models import Article, Student, Tutorial

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class TutorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutorial
        fields = ('id',
                  'title',
                  'description',
                  'published')