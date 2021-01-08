from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse, JsonResponse
from search.models import SavedPlants
from search.searializers import SavedPlantsSearializer
# Create your views here.
# user will be able to search and log in, ideally
# and save plants to his profile
# def main(request):
#     return HttpResponse("<h1>PlantR Search App</h1>")

class SavedPlantsView(generics.CreateAPIView):
    queryset = SavedPlants.objects.all()
    serializer_class = SavedPlantsSearializer

