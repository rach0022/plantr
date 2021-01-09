from django.urls import path
from search.views import SavedPlantsView, index

urlpatterns = [
    path('admin/', SavedPlantsView.as_view()), # remove this for live, just for dev
    path('', index), # react controlled index view
    path('saved/', index)
]
