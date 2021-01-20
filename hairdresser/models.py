from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Reservering(models.Model):
    age = models.CharField(max_length=255)
    behandelingen = models.CharField(max_length=800)
    dag = models.CharField(max_length=10)
    datum = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    fname = models.CharField(max_length=30)
    gender = models.CharField(max_length=255)
    tijd = models.CharField(max_length=20)
    tijdvakje = models.CharField(max_length=20, default='')
    # tijdvakje slaat op de kalender Id vlakjes van de tijden zodat die kunnen worden neergezet als niet beschikbaar of wel beschikbaar

class Klant(models.Model):
    naam = models.CharField(max_length=255)
    email = models.EmailField(max_length=254)
    leeftijd = models.CharField(max_length=3, default='' )
    telefoon = PhoneNumberField(null=False, blank=False, unique=True, default='')
    geslacht = models.CharField(max_length=1)


class Leeftijd(models.Model):
    nulelf = models.CharField(max_length=1)
    twaalfachtien = models.CharField(max_length=1)
    negentienvijfentwintig = models.CharField(max_length=1)
    zesentwintigvijftig = models.CharField(max_length=1)
    vijftigplus = models.CharField(max_length=1)

class Kapper(models.Model):
    naam = models.CharField("Voornaam", max_length=30)

class Behandeling(models.Model):
    behandeltype = models.CharField("type", max_length=30)
    tijdsduur = models.DurationField()
    prijs = models.FloatField()
    kapper = models.ForeignKey(Kapper, on_delete=models.PROTECT)

class Author(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

class Article(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    body = models.TextField()
    author = models.ForeignKey(
        'Author', related_name='articles', on_delete=models.PROTECT)

class Customer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

class Appointment(models.Model):
    date = models.DateField()
    description = models.TextField()
    customer = models.ForeignKey(
        'Customer', related_name='customers', on_delete=models.PROTECT)
