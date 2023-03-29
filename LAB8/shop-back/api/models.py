from django.db import models


# create table products (
#     id INTEGER,
#     name VARCHAR(30),
#     price NUMBER DEFAULT 0,
#     description VARCHAR,
#     count INTEGER,
#     ....
# )

class Category(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json_format(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=30)
    price = models.FloatField(default=0)
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        ordering = ['-price']
        # db_table = 'product_list'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json_format(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'count': self.count,
            'is_active': self.is_active,
            'category': self.category.name
        }
