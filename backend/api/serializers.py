from rest_framework import serializers
from .models import Employee, OnboardingTask, EmployeeOnboarding

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class OnboardingTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = OnboardingTask
        fields = '__all__'

class EmployeeOnboardingSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeOnboarding
        fields = '__all__'