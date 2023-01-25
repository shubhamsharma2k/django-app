from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product,User
from .serializers import ProductSerializer, UserSerializer


@api_view(['GET'])
def products(request):
    data = Product.objects.all()
    serializer = ProductSerializer(data, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def users(request):
    data = User.objects.all()
    serializer = UserSerializer(data, many=True)
    return Response(serializer.data)

