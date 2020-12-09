from django.contrib import admin

from .models import Article, Author, Customer, Appointment

admin.site.register(Article)
admin.site.register(Author)
admin.site.register(Customer)
admin.site.register(Appointment)
