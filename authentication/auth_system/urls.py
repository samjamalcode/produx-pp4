from django.urls import path
from .views import HomePage, Register

urlpatterns =[
    path('home/', HomePage, name="home-page"),
    path('register/', Register, name="register-page" )
]