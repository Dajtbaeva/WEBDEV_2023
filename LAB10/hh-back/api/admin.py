from django.contrib import admin
from . import models


# Register your models here.
@admin.register(models.Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'description', 'city', 'address', ]


@admin.register(models.Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'salary', 'company', ]
