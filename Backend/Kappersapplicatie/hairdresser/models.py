from django.db import models

    
class Klant(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    geslacht = models.CharField(max_length=1)





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
