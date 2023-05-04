from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views

# router = DefaultRouter()
# router.register('profile', views.ProfileViewSet)
# app_name = 'api'

urlpatterns = [
    path('products/', views.Products.as_view(), name='getProducts'),
    path('users/',  views.Users.as_view(), name='getUsers'),
    path('create/', views.CreateUserView.as_view(), name='createUser'),
    path('login/',  views.LoginUser.as_view(), name='userlogin'),
    path('orders/',  views.Orders.as_view(), name='getOrders'),
    path('order/<str:pk>',  views.getOrder.as_view(), name='getOrder'),
    path('create/profile/', views.ProfileCreateView.as_view(), name='createProfile'),
# path('', include(router.urls)),

]
