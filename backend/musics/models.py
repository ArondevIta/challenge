from django.db import models


class Music(models.Model):
    name = models.CharField('Nome', max_length=100)
    music = models.FileField('Musica', upload_to='musics')

    def __str__(self):
        return self.name
