from django.contrib import admin
from django import forms
from .models import GymClass

class GymClassForm(forms.ModelForm):
    class Meta:
        model = GymClass
        fields = '__all__'

@admin.register(GymClass)
class GymClassAdmin(admin.ModelAdmin):
    form = GymClassForm
    fields = (
        'title', 'body', 'image',
    )
