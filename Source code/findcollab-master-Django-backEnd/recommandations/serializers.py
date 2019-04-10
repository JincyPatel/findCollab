from django.conf.urls import url, include
from recommandations.models import Recommendation
from rest_framework import routers, serializers, viewsets
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)



class RecommendationSerializer(serializers.ModelSerializer):
    skills = TagListSerializerField()
    email = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()

    def get_email(self, instance):
    	return instance.user.email

    def get_name(self, instance):
    	return instance.user.first_name

    class Meta:
        model = UserProfile
        fields = ('email', 'name', 'phone', 'skills', 'bio',
		          'profile_image_url')