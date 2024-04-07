# todo_api/urls.py
from django.urls import path
from .views import ListEmployeeAPIView, CreateEmployeeAPIView, UpdateEmployeeAPIView, DeleteEmployeeAPIView, RetrieveEmployeeAPIView

urlpatterns = [
    path('employees/', ListEmployeeAPIView.as_view(), name='employee-list'),
    path('employees/create/', CreateEmployeeAPIView.as_view(), name='employee-create'),
    path('api/employees/<int:employee_id>/', RetrieveEmployeeAPIView.as_view(), name='retrieve-employee'),
    path('employees/update/<int:pk>', UpdateEmployeeAPIView.as_view(), name='employee-update'),
    path('employees/<int:pk>/delete/', DeleteEmployeeAPIView.as_view(), name='employee-delete'),
]