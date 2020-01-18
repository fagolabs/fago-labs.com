from django.urls import path, re_path
from django.views.generic import RedirectView,TemplateView

from . import views
app_name='research'
urlpatterns=[
    path('',TemplateView.as_view(template_name='research/optimized-technique.html'),name="optimized-technique"),
    path('optimized-technique',TemplateView.as_view(template_name='research/optimized-technique.html'),name="optimized-technique"),
    path('dpi',TemplateView.as_view(template_name='research/dpi.html'),name="dpi"),
    path('cns',TemplateView.as_view(template_name='research/cns.html'),name="cns"),
    path('security',TemplateView.as_view(template_name='research/security.html'),name="security")
]