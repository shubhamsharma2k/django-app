from django.contrib import admin
from .models import User, Product, Cart, Customer, Order
# Register your models here.
# admin.site.register(User)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Customer)
admin.site.register(Order)
