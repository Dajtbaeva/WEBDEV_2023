from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import models


def get_products(request):
    # SELECT * FROM products;
    products = models.Product.objects.all()
    products_json = [prod.to_json_format() for prod in products]
    return JsonResponse(products_json, safe=False)


def get_product(request, prod_id):
    # SELECT * FROM products WHERE id=<prod_id>;
    try:
        product = models.Product.objects.get(id=prod_id)
        return JsonResponse(product.to_json_format(), status=200)
    except models.Product.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)


def get_categories(request):
    categories = models.Category.objects.all()
    categories_json = [category.to_json_format() for category in categories]
    return JsonResponse(categories_json, safe=False)


def get_category(request, category_id):
    try:
        category = models.Category.objects.get(id=category_id)
        return JsonResponse(category.to_json_format(), status=200)
    except models.Category.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)


def get_products_by_category(request, category_id):
    # cat1.product_set.all()
    products = models.Product.objects.all()
    products_json = [prod.to_json_format() for prod in products.filter(category=category_id)]
    return JsonResponse(products_json, safe=False)
