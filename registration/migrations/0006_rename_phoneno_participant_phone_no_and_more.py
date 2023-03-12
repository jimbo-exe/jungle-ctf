# Generated by Django 4.0.2 on 2022-07-01 08:22

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0005_alter_participant_discord_id_alter_team_board'),
    ]

    operations = [
        migrations.RenameField(
            model_name='participant',
            old_name='phoneno',
            new_name='phone_no',
        ),
        migrations.RenameField(
            model_name='participant',
            old_name='rollno',
            new_name='roll_no',
        ),
        migrations.AlterField(
            model_name='participant',
            name='discord_ID',
            field=models.CharField(max_length=255, unique=True, validators=[django.core.validators.RegexValidator(code='invalid_discordID', message='Invalid Discord ID', regex='^.{2,32}#[0-9]{4}$')]),
        ),
        migrations.AlterField(
            model_name='team',
            name='board',
            field=models.IntegerField(default=3),
        ),
    ]