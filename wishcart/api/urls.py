from django.urls import path
from .views import  Users,RegisterUser, Products, LoginUser


urlpatterns = [
    path('products/', Products.as_view(), name='getProducts'),
    path('users/', Users.as_view(), name='getUsers'),
    path('login/', LoginUser.as_view(), name='userlogin'),
    path('register/', RegisterUser.as_view(), name='userRegister'),
]
