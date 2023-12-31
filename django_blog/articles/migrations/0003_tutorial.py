# Generated by Django 4.2.7 on 2023-11-19 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("articles", "0002_student"),
    ]

    operations = [
        migrations.CreateModel(
            name="Tutorial",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(default="", max_length=70)),
                ("description", models.CharField(default="", max_length=200)),
                ("published", models.BooleanField(default=False)),
            ],
        ),
    ]
