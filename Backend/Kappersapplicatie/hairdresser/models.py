from django.db import models

    
class Klant(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    geslacht = models.CharField(max_length=1)
    leeftijdscategorie = models.CharField(max_length=25, default='')

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

class Reservering(models.Model):
    behandeling = models.ForeignKey(Behandeling, on_delete=models.PROTECT)
    klant = models.ForeignKey(Klant, on_delete=models.PROTECT)
    geheletijdsduur = models.DurationField(default='')

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
