from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
# user will be able to search and log in, ideally
# and save plants to his profile
def main(request):
    return HttpResponse("<h1>PlantR Search App</h1>")