from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product, User
from .serializers import ProductSerializer, UserSerializer
from django.contrib.auth.hashers import make_password, check_password
import json


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


@api_view(['POST'])
def login(request):
    data = request.data
    authenticated = {
        "isAuthenticated": False,
        "name": "",
        "email": "",
    }
    user = User.objects.get(pk=data['email'])
    checkPassword = check_password(data['password'], user.password)
    if checkPassword is True:
        authenticated['isAuthenticated'] = True
        authenticated['name'] = user.name
        authenticated['email'] = user.email
        return Response(authenticated, status.HTTP_200_OK)
    return Response({"message": "Incorrect email or password!"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def register(request):
    data = request.data
    data['password'] = make_password(
        data['password'])
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": status.HTTP_201_CREATED}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_409_CONFLICT)
