# todo_api/serializers.py
from rest_framework import serializers
from .models import Employee
from .models import DogRace

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogRace
        fields = '__all__'