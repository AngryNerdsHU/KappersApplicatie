# Generated by Django 3.1.4 on 2021-01-21 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hairdresser', '0002_reservering'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservering',
            name='tijdvakje',
            field=models.CharField(default='', max_length=20),
        ),
    ]
