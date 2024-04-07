# todo_api/views.py
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

#imports to create an specialized API
from rest_framework.views import APIView # to create a specialized API
from django.http import Http404 # to be able to return 404 status
from rest_framework.response import Response # to be able to construct a rest response
from rest_framework import status 

from .models import Employee
from .serializers import EmployeeSerializer

class ListEmployeeAPIView(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class CreateEmployeeAPIView(CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class UpdateEmployeeAPIView(UpdateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class DeleteEmployeeAPIView(DestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeDetail(APIView):
    """
    Retrieve an employee instance.
    """
    def get_object(self, pk):
        try:
            return Employee.objects.get(pk=pk)
        except Employee.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        employee = self.get_object(pk)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)