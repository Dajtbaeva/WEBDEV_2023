from django.urls import path
# from api.views import *
from . import views

urlpatterns = [
    # path('time/', views.show_time),
    path('products/', views.get_products),
    path('products/<int:prod_id>/', views.get_product),
    path('categories/', views.get_categories),
    path('categories/<int:category_id>/', views.get_category),
    path('categories/<int:category_id>/products', views.get_products_by_category),
]
