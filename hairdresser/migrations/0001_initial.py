# Generated by Django 3.1.4 on 2021-01-07 14:21

from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Behandeling',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('behandeltype', models.CharField(max_length=30, verbose_name='type')),
                ('tijdsduur', models.DurationField()),
                ('prijs', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Kapper',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('naam', models.CharField(max_length=30, verbose_name='Voornaam')),
            ],
        ),
        migrations.CreateModel(
            name='Klant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('naam', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('leeftijd', models.CharField(default='', max_length=3)),
                ('telefoon', phonenumber_field.modelfields.PhoneNumberField(default='', max_length=128, region=None, unique=True)),
                ('geslacht', models.CharField(max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Leeftijd',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nulelf', models.CharField(max_length=1)),
                ('twaalfachtien', models.CharField(max_length=1)),
                ('negentienvijfentwintig', models.CharField(max_length=1)),
                ('zesentwintigvijftig', models.CharField(max_length=1)),
                ('vijftigplus', models.CharField(max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Reservering',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('geheletijdsduur', models.DurationField(default='')),
                ('behandeling', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='hairdresser.behandeling')),
                ('klant', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='hairdresser.klant')),
            ],
        ),
        migrations.AddField(
            model_name='behandeling',
            name='kapper',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='hairdresser.kapper'),
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('body', models.TextField()),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='articles', to='hairdresser.author')),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('description', models.TextField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='customers', to='hairdresser.customer')),
            ],
        ),
    ]