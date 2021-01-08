from rest_framework import serializers
from search.models import SavedPlants
class SavedPlantsSearializer(serializers.ModelSerializer):
    class Meta:
        model = SavedPlants
        fields = ('id', 'plant_id', 'user', 'created_at')