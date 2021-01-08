from django.urls import path
from search.views import SavedPlantsView

urlpatterns = [
    path('saved', SavedPlantsView.as_view())
]
