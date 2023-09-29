# counseling_app/urls.py
from django.urls import path
from .views import register_user

urlpatterns = [
    path('register/', register_user, name='register_user'),
]

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('counseling_app.urls')),
    # Add more URLs as needed
]
