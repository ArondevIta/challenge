from rest_framework.viewsets import ModelViewSet
from .serializers import MusicsSerializer
from musics.models import Music

class MusicsViewSet(ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicsSerializer
