# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from profiles.models import UserProfile
from posts.models import Post


class Transaction(models.Model):
	name = models.CharField(max_length=200)
	activity = models.ForeignKey(Post)
	points = models.IntegerField(default=0)
	user = models.ForeignKey(UserProfile)
	updated = models.DateTimeField(auto_now=True)
	created = models.DateTimeField(auto_now_add=True)
	context = models.TextField(null=True)

	def __str__(self):
		return self.name
