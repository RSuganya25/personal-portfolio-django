from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Home page at root URL
    path('resume/', views.resume, name='resume'),
    path('contact/', views.contact, name='contact'),
]
