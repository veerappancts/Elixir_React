# Generated by Django 4.2.3 on 2023-07-27 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("dashboard", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="updatedetails",
            name="deadline",
            field=models.DateTimeField(),
        ),
    ]
