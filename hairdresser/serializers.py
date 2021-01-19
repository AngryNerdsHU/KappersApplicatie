from rest_framework import serializers
from .models import Article, Author, Appointment, Customer, Reservering

# Klant, Leeftijd, Kapper, Behandeling,

class ReserveringSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reservering
        fields = ('id',
                  'age',
                  'behandelingen',
                  'dag',
                  'datum',
                  'email',
                  'fname',
                  'gender',
                  'tijd',
                  'Tijdvakje')
# class KlantSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Klant
#         fields = ('id',
#                   'naam',
#                   'email',
#                   'leeftijd',
#                   'telefoon'
#                   'geslacht',)

# class LeeftijdSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Leeftijd
#         fields = ('id',
#                   'nulelf',
#                   'twaalfachtien',
#                   'negentienvijfentwintig',
#                   'zesentwintigvijftig',
#                   'vijftigplus',)
                 
# class KapperSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Kapper
#         fields = ('id',
#                   'naam',)

# class BehandelingSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Behandeling
#         fields = ('id',
#                   'behandeltype',
#                   'tijdsduur',
#                   'prijs',
#                   'kapper',)

# class ReserveringSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Reservering
#         fields = ('id',
#                   'behandeling_id',
#                   'klant_id'
#                   'geheletijdsduur',)

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
