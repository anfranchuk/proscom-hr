from django.db import models
from django.contrib.auth.models import User

class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    hire_date = models.DateField()

class OnboardingTask(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

class EmployeeOnboarding(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    task = models.ForeignKey(OnboardingTask, on_delete=models.CASCADE)
    is_complete = models.BooleanField(default=False)
    completion_date = models.DateField(null=True, blank=True)