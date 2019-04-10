# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from taggit.managers import TaggableManager
from profiles.models import UserProfile


class Post(models.Model):
	title = models.CharField(max_length=200)
	description = models.TextField()
	limit = models.IntegerField(default=2)
	created_by = models.ForeignKey(UserProfile, related_name="posts")
	attendees = models.ManyToManyField(UserProfile)
	start_date = models.DateTimeField()
	end_date = models.DateTimeField()
	skills = TaggableManager()
	image_url = models.URLField(null=True)

	def __str__(self):
		return self.title


	@property
	def get_title(self):
		return self.title
