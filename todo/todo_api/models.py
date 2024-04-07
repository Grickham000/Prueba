from django.db import models

# Create your models here.

# todo_api/models.py
from django.db import models

class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    # Add other relevant fields as needed

class DogRace(models.Model):
    """
    Model representing a dog race.
    """
    name = models.CharField(max_length=100, help_text="Enter the name of the dog race")
    description = models.TextField(help_text="Enter a brief description of the race")
    date = models.DateField(help_text="Date of the race")

    def __str__(self):
        return self.name