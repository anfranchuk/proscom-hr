from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Add custom fields here
    bio = models.TextField(blank=True)
    birth_date = models.DateField(null=True, blank=True)
    # Add more fields as needed

    def __str__(self):
        return self.username