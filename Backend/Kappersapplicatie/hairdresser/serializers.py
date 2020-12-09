from rest_framework import serializers
from .models import Article, Author, Appointment, Customer






class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = ('id',
                  'name',
                  'email',)


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('id',
                  'title',
                  'description',
                  'author_id')


class AppointmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = ('id',
                  'date',
                  'description',
                  'customer_id')


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ('id',
                  'name',
                  'email')
