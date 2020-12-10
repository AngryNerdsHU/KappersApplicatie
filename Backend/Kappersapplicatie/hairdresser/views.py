from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse

from .models import Article, Author, Appointment, Customer, Klant, Leeftijd, Behandeling, Kapper
from .serializers import ArticleSerializer, AuthorSerializer, ArticleSerializer, AppointmentSerializer, CustomerSerializer, KlantSerializer, LeeftijdSerializer, KapperSerializer, BehandelingSerializer

class KlantView(APIView):
    def get(self, request):
        data = Klant.objects.all()
        serializer = KlantSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        json = JSONParser().parse(request)
        serializer = KlantSerializer(data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            data = Klant.objects.get(pk=pk)
        except Klant.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        json = JSONParser().parse(request)
        serializer = KlantSerializer(data, data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            data = Klant.objects.get(pk=pk)
        except Klant.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data.delete()
        return JsonResponse({'message': 'Item deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

class LeeftijdView(APIView):
    def get(self, request):
        data = Leeftijd.objects.all()
        serializer = LeeftijdSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        json = JSONParser().parse(request)
        serializer = LeeftijdSerializer(data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            data = Leeftijd.objects.get(pk=pk)
        except Leeftijd.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        json = JSONParser().parse(request)
        serializer = LeeftijdSerializer(data, data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            data = Leeftijd.objects.get(pk=pk)
        except Leeftijd.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data.delete()
        return JsonResponse({'message': 'Item deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

class KapperView(APIView):
    def get(self, request):
        data = Kapper.objects.all()
        serializer = KapperSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        json = JSONParser().parse(request)
        serializer = KapperSerializer(data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            data = Kapper.objects.get(pk=pk)
        except Kapper.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        json = JSONParser().parse(request)
        serializer = KapperSerializer(data, data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            data = Kapper.objects.get(pk=pk)
        except Kapper.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data.delete()
        return JsonResponse({'message': 'Item deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

class BehandelingView(APIView):
    def get(self, request):
        data = Behandeling.objects.all()
        serializer = BehandelingSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        json = JSONParser().parse(request)
        serializer = BehandelingSerializer(data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            data = Behandeling.objects.get(pk=pk)
        except Behandeling.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        json = JSONParser().parse(request)
        serializer = BehandelingSerializer(data, data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            data = Behandeling.objects.get(pk=pk)
        except Behandeling.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data.delete()
        return JsonResponse({'message': 'Item deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


class AuthorView(APIView):
    def get(self, request):
        data = Author.objects.all()
        serializer = AuthorSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        json = JSONParser().parse(request)
        serializer = AuthorSerializer(data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            data = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        json = JSONParser().parse(request)
        serializer = AuthorSerializer(data, data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            data = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data.delete()
        return JsonResponse({'message': 'Item deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


class ArticleView(APIView):
    def get(self, request):
        data = Article.objects.all()
        serializer = ArticleSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        json = JSONParser().parse(request)
        serializer = ArticleSerializer(data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            data = Article.objects.get(pk=pk)
        except Author.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        json = JSONParser().parse(request)
        serializer = ArticleSerializer(data, data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            data = Article.objects.get(pk=pk)
        except Article.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data.delete()
        return JsonResponse({'message': 'Item deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


class AppointmentView(APIView):
    def get(self, request):
        data = Appointment.objects.all()
        serializer = AppointmentSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        json = JSONParser().parse(request)
        serializer = AppointmentSerializer(data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            data = Appointment.objects.get(pk=pk)
        except Appointment.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        json = JSONParser().parse(request)
        serializer = AppointmentSerializer(data, data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            data = Appointment.objects.get(pk=pk)
        except Appointment.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data.delete()
        return JsonResponse({'message': 'Item deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


class CustomerView(APIView):
    def get(self, request):
        data = Customer.objects.all()
        serializer = CustomerSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        json = JSONParser().parse(request)
        serializer = CustomerSerializer(data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            data = Customer.objects.get(pk=pk)
        except Customer.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        json = JSONParser().parse(request)
        serializer = CustomerSerializer(data, data=json)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            data = Customer.objects.get(pk=pk)
        except Customer.DoesNotExist:
            return JsonResponse({'message': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data.delete()
        return JsonResponse({'message': 'Item deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
