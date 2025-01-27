from rest_framework import serializers
from .models import GymClass

class GymClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = GymClass
        fields = '__all__'
