from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views
# from .views import ContactFormView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('', include('classes.urls')),
    # path('', include('schedules.urls')),
    # path('', include('trainers.urls')),
    # path('', include('partners.urls')),
    # path('api/contact-us/', ContactFormView.as_view(), name='contact-us'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
