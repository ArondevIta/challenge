from rest_framework import serializers
from musics.models import Music


class MusicsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Music
        fields = ('id', 'name', 'music')
