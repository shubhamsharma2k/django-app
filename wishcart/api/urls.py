from django.urls import path
from .views import Users, RegisterUser, Products, LoginUser, Orders, getOrder


urlpatterns = [
    path('products/', Products.as_view(), name='getProducts'),
    path('users/', Users.as_view(), name='getUsers'),
    path('login/', LoginUser.as_view(), name='userlogin'),
    path('register/', RegisterUser.as_view(), name='userRegister'),
    path('orders/', Orders.as_view(), name='getOrders'),
    path('order/<str:pk>', getOrder.as_view(), name='getOrder'),
]
