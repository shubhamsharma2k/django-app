from .models import User, Product, Order, Profile
from .serializers import UserSerializer, ProductSerializer, OrderSerializer, ProfileSerializer

from django.contrib.auth.hashers import check_password

from rest_framework import viewsets
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


# Users API views

# Get user details with profile.
class Users(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer


# login and authenticate user and provide details and profile.
class LoginUser(APIView):
    def post(self, request):
        data = request.data
        authenticatedData = {
            "isAuthenticated": False,
            "name": "",
            "email": "",
            "profile": []
        }
        user = User.objects.get(email=data['email'])
        checkPassword = check_password(data['password'], user.password)
        if checkPassword is True:
            authenticatedData['isAuthenticated'] = True
            authenticatedData['name'] = user.name
            authenticatedData['email'] = user.email
            # Check if user has profile
            if hasattr(user, 'profile'):
                profile_serializer = ProfileSerializer(user.profile)
                authenticatedData['profile'] = profile_serializer.data
            return Response(authenticatedData, status.HTTP_200_OK)
        return Response({"message": "Incorrect email or password!"}, status=status.HTTP_400_BAD_REQUEST)


# Profile API views
class ProfileCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = ProfileSerializer


# Products API views
class Products(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


# Orders API views
class Orders(generics.ListAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()


class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class getOrder(generics.RetrieveAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
