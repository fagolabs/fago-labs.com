from django.urls import path, re_path
from django.views.generic import RedirectView,TemplateView

from . import views
app_name='services'
urlpatterns=[
    path('',TemplateView.as_view(template_name='services/technical-consultant.html'),name="technical-consultant"),
    path('technical-consultant',TemplateView.as_view(template_name='services/technical-consultant.html'),name="technical-consultant"),
    path('outsourcing',TemplateView.as_view(template_name='services/outsourcing.html'),name="outsourcing"),
]