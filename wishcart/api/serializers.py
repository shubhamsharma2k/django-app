from rest_framework import serializers
from .models import Product, Order, Profile
from django.contrib.auth import (get_user_model, authenticate)
from django.utils.translation import gettext as _


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'name', 'residence', 'city', 'zipcode', 'state']


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = get_user_model()
        fields = ['email', 'password', 'name', 'profile']

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    product = ProductSerializer(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
