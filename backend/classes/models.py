from django.db import models

class GymClass(models.Model):

    title = models.CharField(max_length=25, unique=True)
    body = models.TextField()
    image = models.ImageField(upload_to='images/classes')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Gym Class'
        verbose_name_plural = 'Gym Classes'
