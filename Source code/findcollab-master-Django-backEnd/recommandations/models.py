# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from posts.models import Post
from profiles.models import UserProfile


STATUS_CHOICES = (
    (1, ("Active")),
    (2, ("Archived")),
)


class Recommendation(models.Model):
	activity = models.ForeignKey(Post)
	user = models.ForeignKey(UserProfile)
	score = models.IntegerField(default=0)
	status = models.IntegerField(choices=STATUS_CHOICES, default=1)

	def __str__(self):
		return self.activity.title
