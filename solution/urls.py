from django.urls import path, re_path
from django.views.generic import RedirectView,TemplateView

from . import views
app_name='solution'
urlpatterns=[
    path('',TemplateView.as_view(template_name='solution/dns-server.html'),name="dns-server"),
    path('dns-server',TemplateView.as_view(template_name='solution/dns-server.html'),name="dns-server"),
    path('web-server',TemplateView.as_view(template_name='solution/web-server.html'),name="web-server"),
    path('ott-system',TemplateView.as_view(template_name='solution/ott-system.html'),name="ott-system"),
    path('traffic-recognizer',TemplateView.as_view(template_name='solution/traffic-recognizer.html'),name="traffic-recognizer"),
    path('ids-ips',TemplateView.as_view(template_name='solution/ids-ips.html'),name="ids-ips"),
    path('virtual-firewall',TemplateView.as_view(template_name='solution/virtual-firewall.html'),name="virtual-firewall"),
]