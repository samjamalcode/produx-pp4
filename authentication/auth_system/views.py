from django.shortcuts import render, redirect
from django.contrib.auth.models import User
# Create your views here.

def HomePage(request):
    return render(request, 'auth_system/index.html', {})

def Register(request):
    if request.method == 'POST':
        fname  = request.POST.get('fname')
        lname  = request.POST.get('sname')
        name  = request.POST.get('uname')
        email  = request.POST.get('email')
        password  = request.POST.get('pass')

        # Create and save the new user
        new_user = User.objects.create_user(name, email, password)
        new_user.first_name = fname
        new_user.last_name = lname

        new_user.save()
        return redirect('login-page')  # Redirect to the login page after successful registration

    else:
        # If the request is GET, render the registration form
        return render(request, 'auth_system/register.html', {})

def Login(request):
    if request.method == 'POST':  
        name  = request.POST.get('uname')
        password  = request.POST.get('pass')
    
    return render(request, 'auth_system/login.html', {})