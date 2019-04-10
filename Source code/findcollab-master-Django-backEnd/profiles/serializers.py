from django.conf.urls import url, include
from profiles.models import UserProfile
from rest_framework import routers, serializers, viewsets
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)



class UserProfileSerializer(serializers.ModelSerializer):
    skills = TagListSerializerField()
    email = serializers.CharField(source="user.email", read_only=True)
    name = serializers.CharField(source="user.first_name", read_only=True)
    points_earned = serializers.SerializerMethodField()
    points_redeemed = serializers.SerializerMethodField() 


    @classmethod
    def get_points_earned(self, instance):
        return 200

    @classmethod
    def get_points_redeemed(self, instance):
        return 10

    class Meta:
        model = UserProfile
        fields = ('email', 'name', 'phone', 'skills', 'bio',
		          'profile_image_url', 'points_earned', 'points_redeemed')