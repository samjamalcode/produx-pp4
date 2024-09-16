from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User

class SimpleTest(TestCase):
    def setUp(self):
        # Create a user
        self.user = User.objects.create_user(username='testuser', password='testpassword')

    def test_homepage_status_code_logged_out(self):
        # Test homepage status code when logged out
        response = self.client.get(reverse('home-page'))
        self.assertEqual(response.status_code, 302)  # Expecting a redirect to login page

    def test_homepage_status_code_logged_in(self):
        # Log in the user
        self.client.login(username='testuser', password='testpassword')
        response = self.client.get(reverse('home-page'))
        self.assertEqual(response.status_code, 200)  # Should be 200 if logged in

    def test_login_page_status_code(self):
        response = self.client.get(reverse('login-page'))
        self.assertEqual(response.status_code, 200) 
