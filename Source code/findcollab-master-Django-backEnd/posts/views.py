# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from profiles.models import UserProfile
from posts.serializers import PostSerializer
from posts.models import Post
from transactions.models import Transaction
from recommandations.models import Recommendation
from rest_framework import views
from rest_framework.response import Response


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


    def get_queryset(self):
    	recommandations = Recommendation.objects.filter(user__id=1)
    	recs = [rec.activity.pk for rec in recommandations]
    	return Post.objects.filter(id__in=recs)



class JoinAPI(views.APIView):

    def post(self, request):
        data = self.request.data
        activity = data['activity']
        user = data['user']
        user = UserProfile.objects.get(id=user)
        activity = Post.objects.get(id=activity)
        activity.attendees.add(user)
        activity.save()
        transaction = Transaction.objects.create(name=activity.title, user=user,
                                                 points=5, activity=activity)

        return Response({"Sucessfully Joined the activity"})


