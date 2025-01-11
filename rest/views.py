from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
# Create your views here.

class MainView(viewsets.ViewSet):
    def list(self, request):
        return Response({"message": "Backend endpoint works!"})
