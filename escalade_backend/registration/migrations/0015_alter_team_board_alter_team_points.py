# Generated by Django 4.0.2 on 2022-07-13 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0014_team_hint_taken_team_sneakpeek_taken_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='board',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='team',
            name='points',
            field=models.IntegerField(default=50),
        ),
    ]