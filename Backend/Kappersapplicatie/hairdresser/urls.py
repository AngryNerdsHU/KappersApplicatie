from django.urls import path

from .views import ArticleView, AuthorView, AppointmentView, CustomerView, KlantView, LeeftijdView, KapperView, BehandelingView


app_name = "articles"

# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('authors/', AuthorView.as_view()),
    path('authors/<int:pk>', AuthorView.as_view()),
    path('articles/', ArticleView.as_view()),
    path('articles/<int:pk>', ArticleView.as_view()),
    path('appointments/', AppointmentView.as_view()),
    path('appointments/<int:pk>', AppointmentView.as_view()),
    path('customers/', CustomerView.as_view()),
    path('customers/<int:pk>', CustomerView.as_view()),
    path('klant/', KlantView.as_view()),
    path('klant/<int:pk>', KlantView.as_view()),
    path('leeftijd/', LeeftijdView.as_view()),
    path('leeftijd/<int:pk>', LeeftijdView.as_view()),
    path('kapper/', KapperView.as_view()),
    path('kapper/<int:pk>', KapperView.as_view()),
    path('behandeling/', BehandelingView.as_view()),
    path('behandeling/<int:pk>', BehandelingView.as_view()),

]
