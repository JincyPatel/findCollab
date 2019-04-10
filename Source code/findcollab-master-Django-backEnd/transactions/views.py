# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from transactions.serializers import TransactionSerializer
from transactions.models import Transaction


class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.filter(user__id=1)
    serializer_class = TransactionSerializer