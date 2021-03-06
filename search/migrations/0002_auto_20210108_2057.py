# Generated by Django 2.1.15 on 2021-01-08 20:57

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('search', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='savedplants',
            name='plant_id',
            field=models.IntegerField(),
        ),
        migrations.AlterUniqueTogether(
            name='savedplants',
            unique_together={('user', 'plant_id')},
        ),
    ]
