# users/admin.py

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

class UserAdmin(BaseUserAdmin):
    # The fields to be used in displaying the User model.
    list_display = ('email', 'username', 'phone_number', 'course_major', 'is_active', 'is_staff')
    list_filter = ('is_active', 'is_staff')
    ordering = ('email',)
    search_fields = ('email', 'username', 'phone_number')
    
    # Fieldsets define the layout of the admin form
    fieldsets = (
        (None, {'fields': ('email', 'username', 'phone_number', 'course_major', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('date_joined',)}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'phone_number', 'course_major', 'password1', 'password2', 'is_active', 'is_staff')}
        ),
    )
    
    # Specify the form for adding a user
    def add_user(self, request, form, change=False):
        return super().add_user(request, form, change)

# Register the custom user model with the UserAdmin
admin.site.register(User, UserAdmin)
