from django.contrib import admin
from .models import User, Product, Cart, Profile, Order
# Register your models here.
admin.site.register(User)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Profile)
admin.site.register(Order)
