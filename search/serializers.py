from rest_framework import serializers
from search.models import SavedPlants
class SavedPlantsSearializer(serializers.ModelSerializer):
    class Meta:
        model = SavedPlants
        fields = ('id', 'plant_id', 'user', 'created_at') # the data I want back from the saved plants

class AddPlantSearializer(serializers.ModelSerializer):
    class Meta:
        model = SavedPlants
        fields = ('plant_id', 'user') # the two required fields to save a plant