from rest_framework import serializers
from . import models
from .models import *


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(name=validated_data.get('name', ),
                                         description=validated_data.get('description', ),
                                         city=validated_data.get('city', ),
                                         address=validated_data.get('address', ))
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', )
        instance.description = validated_data.get('description', )
        instance.city = validated_data.get('city', )
        instance.address = validated_data.get('address', )
        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')
