from rest_framework.views import APIView
from rest_framework.response import Response
from .models import GymClass
from .serializers import GymClassSerializer

class GymClassListView(APIView):
    def get(self, request, *args, **kwargs):
        title = request.GET.get('title', None)
        if title:
            gym_classes = GymClass.objects.filter(title__icontains=title)
        else:
            gym_classes = GymClass.objects.all()

        serializer = GymClassSerializer(gym_classes, many=True)
        return Response(serializer.data)
