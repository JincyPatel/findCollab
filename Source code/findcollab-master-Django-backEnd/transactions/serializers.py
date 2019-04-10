from django.conf.urls import url, include
from transactions.models import Transaction
from posts.serializers import PostSerializer
from rest_framework import routers, serializers, viewsets
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)



class TransactionSerializer(serializers.ModelSerializer):
    activity = PostSerializer()

    class Meta:
        model = Transaction
        fields = ('id', 'name', 'activity', 'points', 'user', 'updated',
		          'created', )