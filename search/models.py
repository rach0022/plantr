from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class SavedPlants(models.Model):
    plant_id = models.IntegerField() # duplicate plants should not be saved
    user = models.ForeignKey(User, related_name="user", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = (('user', 'plant_id')) # to stop users from duplicate saves