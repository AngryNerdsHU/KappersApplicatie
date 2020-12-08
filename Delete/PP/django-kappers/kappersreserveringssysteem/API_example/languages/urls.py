from django.urls import path
from . import views
from rest_framework import routers
from django.conf.urls import include, url

router = routers.DefaultRouter()
router.register ('languages', views.LanguageView)

urlpatterns = [
    path('', include(router.urls)),
    url(r'^api/languages$', views.language_list),
    url(r'^api/languages/(?P<pk>[0-9]+)$', views.language_detail),
    url(r'^api/languages/published$', views.language_list_published)
]