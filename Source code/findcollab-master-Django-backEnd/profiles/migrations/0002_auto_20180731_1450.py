# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-07-31 14:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='bio',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='profile_image_url',
            field=models.URLField(null=True),
        ),
    ]
