from django.urls import path
from . import views
urlpatterns = [
    path('products/', views.products, name='getProducts'),
    path('users/', views.users, name='getUsers'),
]
