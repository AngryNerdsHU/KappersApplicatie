# Generated by Django 3.1.4 on 2021-01-21 09:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hairdresser', '0005_auto_20210121_1010'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservering',
            old_name='tijdsvakje',
            new_name='tijdsvak',
        ),
    ]