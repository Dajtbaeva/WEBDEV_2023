from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', get_companies),
    path('companies/<int:company_id>/', get_company),
    path('companies/<int:company_id>/vacancies/', get_company_vacancies),
    path('vacancies/', VacanciesAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
]
