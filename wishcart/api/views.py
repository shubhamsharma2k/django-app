from .models import Product, User
from .serializers import ProductSerializer, UserSerializer
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
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
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class LoginUser(APIView):
    def post(self, request):
        data = request.data
        authenticated = {
            "isAuthenticated": False,
            "name": "",
            "email": "",
            "token": "",
        }
        user = User.objects.get(email=data['email'])
        print(user)
        checkPassword = check_password(data['password'], user.password)
        if checkPassword is True:
            token = RefreshToken.for_user(user)

            authenticated['isAuthenticated'] = True
            authenticated['name'] = user.name
            authenticated['email'] = user.email
            authenticated['token'] = str(token.access_token)
            return Response(authenticated, status.HTTP_200_OK)
        return Response({"message": "Incorrect email or password!"}, status=status.HTTP_400_BAD_REQUEST)


class RegisterUser(APIView):
    def post(self, request):
        data = request.data
        data['password'] = make_password(
            data['password'])
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": status.HTTP_201_CREATED}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_409_CONFLICT)
