from django.apps import AppConfig
from suit.apps import DjangoSuitConfig


class AuthSystemConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'auth_system'


class SuitConfig(DjangoSuitConfig):
    layout = 'horizontal'