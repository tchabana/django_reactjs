# Generated by Django 4.2.7 on 2024-01-18 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=100, unique=True)),
                ('notes', models.CharField(max_length=500)),
                ('avatar', models.ImageField(upload_to='')),
                ('stared', models.BooleanField()),
            ],
        ),
    ]
