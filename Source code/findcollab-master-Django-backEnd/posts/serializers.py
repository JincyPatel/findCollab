from django.conf.urls import url, include
from posts.models import Post
from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)

from profiles.serializers import UserProfileSerializer



class PostSerializer(serializers.ModelSerializer):
    skills = TagListSerializerField()
    created_by = UserProfileSerializer()
    attendees = UserProfileSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'limit', 'created_by', 'skills',
		          'attendees', 'start_date', 'end_date', 'image_url')