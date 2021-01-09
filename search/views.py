from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from search.models import SavedPlants
from search.serializers import SavedPlantsSearializer, AddPlantSearializer
# Create your views here.
# user will be able to search and log in, ideally
# and save plants to his profile
# def main(request):
#     return HttpResponse("<h1>PlantR Search App</h1>")

def index(request, *args, **kwargs):
    return render(request, 'search/index.html')

class SavedPlantsView(generics.CreateAPIView):
    queryset = SavedPlants.objects.all()
    serializer_class = SavedPlantsSearializer

class AddSavedPlantView(APIView):
    searilizer_class = AddPlantSearializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            # creating a session for testing, serves no use at this time
            self.request.session.create() # if they do not have a session create one
        
        # serialize the request and check if its valid
        serializer = self.searilizer_class(data=request.data)
        if serializer.is_valid():
            plant_id = serializer.data['plant_id']
            user = User.objects.filter(id=serializer.data['user'])

            # check if the user already has the plant added
            queryset = SavedPlants.objects.filter(plant_id=plant_id, user=user)
            if queryset.exists():
                # user already added this
                plant = queryset[0]
                plant.save(update_fields='updated_at') # to updated the updated_at field
                return Response(SavedPlantsSearializer(plant).data, status=status.HTTP_200_OK)
            else:
                plant = SavedPlants(plant_id=plant_id, user=user)
                return Response(SavedPlantsSearializer(plant).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
        