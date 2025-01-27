from django.urls import path
from .views import GymClassListView

urlpatterns = [
    path('api/classes/', GymClassListView.as_view(), name='class-list'),
]
