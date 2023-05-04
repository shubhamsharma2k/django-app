from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views

urlpatterns = [
    path('users/', views.Users.as_view(), name='users'),
    path('create/user', views.CreateUserView.as_view(), name='createUser'),
    path('login/',  views.LoginUser.as_view(), name='userlogin'),
    path('orders/',  views.Orders.as_view(), name='getOrders'),
    path('create/order/', views.OrderCreateView.as_view(), name='createOrder'),
    path('order/<str:pk>',  views.getOrder.as_view(), name='getOrder'),
    path('create/profile/', views.ProfileCreateView.as_view(), name='createProfile'),
    path('products/', views.Products.as_view(), name='getProducts'),

]
