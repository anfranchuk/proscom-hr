from rest_framework import viewsets
from .models import Employee, OnboardingTask, EmployeeOnboarding
from .serializers import EmployeeSerializer, OnboardingTaskSerializer, EmployeeOnboardingSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class OnboardingTaskViewSet(viewsets.ModelViewSet):
    queryset = OnboardingTask.objects.all()
    serializer_class = OnboardingTaskSerializer

class EmployeeOnboardingViewSet(viewsets.ModelViewSet):
    queryset = EmployeeOnboarding.objects.all()
    serializer_class = EmployeeOnboardingSerializer