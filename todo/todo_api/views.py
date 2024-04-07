# todo_api/views.py
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView,RetrieveAPIView
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

class RetrieveEmployeeAPIView(RetrieveAPIView):
    """
    API view to retrieve a single employee by ID.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def get_object(self):
        employee_id = self.kwargs.get('employee_id')
        return get_object_or_404(Employee, id=employee_id)