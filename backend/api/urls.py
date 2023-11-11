from django.urls import include, path
from rest_framework import routers
from .views import EmployeeViewSet, OnboardingTaskViewSet, EmployeeOnboardingViewSet

router = routers.DefaultRouter()
router.register('employees', EmployeeViewSet)
router.register('onboarding-tasks', OnboardingTaskViewSet)
router.register('employee-onboarding', EmployeeOnboardingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]