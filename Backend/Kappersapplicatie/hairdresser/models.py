from django.db import models


class Geslacht(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    man =
    vrouw = 

# class Author(models.Model):
#     name = models.CharField(max_length=255)
#     email = models.EmailField()












# class Article(models.Model):
#     title = models.CharField(max_length=120)
#     description = models.TextField()
#     body = models.TextField()
#     author = models.ForeignKey(
#         'Author', related_name='articles', on_delete=models.PROTECT)


# class Customer(models.Model):
#     name = models.CharField(max_length=255)
#     email = models.EmailField()


# class Appointment(models.Model):
    # date = models.DateField()
    # description = models.TextField()
    # customer = models.ForeignKey(
    #     'Customer', related_name='customers', on_delete=models.PROTECT)
