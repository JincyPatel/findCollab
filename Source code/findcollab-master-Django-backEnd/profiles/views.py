# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from profiles.serializers import UserProfileSerializer
from profiles.models import UserProfile


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def get_object(self):
        user_id = self.kwargs["pk"]
        if user_id == "current":
        	profile = UserProfile.objects.get(user=self.request.user)
        	return profile            
        else:
            return self.get_queryset().get(pk=user_id)
