from django.shortcuts import render

# Create your views here.

def HomePage(request):
    return render(request, 'auth_system/index.html', {})

def Register(request):
    return render(request, 'auth_system/register.html', {})

def Login(request):
    pass