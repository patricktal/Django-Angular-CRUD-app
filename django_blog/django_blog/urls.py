
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.urls import path
from articles import views
from django.urls import path
from django.urls import re_path as url

urlpatterns = [
    url(r'^article$',views.articleAPI),
    url(r'^article$',views.articleAPI),
    url(r'^article/([0-9]+)$',views.articleAPI),
    url(r'^student$',views.studentApi),
    url(r'^student$',views.studentApi),
    url(r'^student/([0-9]+)$',views.studentApi),
    url(r'^api/tutorials$', views.tutorial_list),
    url(r'^api/tutorials/(?P<pk>[0-9]+)$', views.tutorial_detail),
    url(r'^api/tutorials/published$', views.tutorial_list_published),

    path('admin/', admin.site.urls),

]