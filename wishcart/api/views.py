from .models import CustomUser, Product
from .serializers import UserSerializer, ProductSerializer
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


class Products(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class Users(APIView):
    def get(self, request):
        users = CustomUser.objects.filter(is_superuser=False, is_staff=False)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class LoginUser(APIView):
    def post(self, request):
        data = request.data
        authenticated = {
            "isAuthenticated": False,
            "name": "",
            "email": "",
        }
        user = CustomUser.objects.get(email=data['email'])
        checkPassword = check_password(data['password'], user.password)
        if checkPassword is True:
            authenticated['isAuthenticated'] = True
            authenticated['name'] = user.name
            authenticated['email'] = user.email
            return Response(authenticated, status.HTTP_200_OK)
        return Response({"message": "Incorrect email or password!"}, status=status.HTTP_400_BAD_REQUEST)


class RegisterUser(APIView):
    def post(self, request):
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            CustomUser.objects.create_user(
                email=data['email'], password=data['password'], extra_fields=data)
            return Response({"status": status.HTTP_201_CREATED}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_409_CONFLICT)
