from django.urls import path
from django.views.generic import RedirectView, TemplateView

app_name = 'about'
urlpatterns = [
    path('', TemplateView.as_view(template_name='about/about.html'), name='about'),
    path('history', TemplateView.as_view(template_name='about/history.html'), name='history'),
    path('team', TemplateView.as_view(template_name='about/team.html'), name='team'),
    path('join', TemplateView.as_view(template_name='about/join.html'), name='join'),
]
