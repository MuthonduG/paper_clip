from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.exceptions import ValidationError
from django.db import models
import random
import string

# Function for creating custom user_id
def generate_custom_user_id():
    user_id = string.ascii_letters + string.digits
    custom_id = ''.join(random.choice(user_id) for _ in range(12))
    return custom_id

class CustomUserManager(BaseUserManager):
    # Create a new user
    def create_user(self, email, username, password=None, phone_number=None, course_major=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email!")
        if not username:
            raise ValueError("User must have a username!")

        # Generate unique custom user ID on registration
        paper_clip_id = self.generate_unique_paper_clip_id()

        # Define required attributes
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            username=username,
            phone_number=phone_number,
            course_major=course_major,
            paper_clip_id=paper_clip_id,
            **extra_fields
        )
        user.set_password(password)
        
        try:
            user.full_clean()
            user.save(using=self._db)
        except ValidationError as e:
            raise ValidationError(f"Error: {e.messages}")
        except Exception as e:
            raise ValidationError(f"Unexpected error: {str(e)}")
        
        return user

    # Create a superuser
    def create_superuser(self, email, username, phone_number=None, course_major=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, username, password, phone_number, course_major, **extra_fields)

    # Ensure that user ID is unique
    def generate_unique_paper_clip_id(self):
        while True:
            paper_clip_id = generate_custom_user_id()
            if not self.model.objects.filter(paper_clip_id=paper_clip_id).exists():
                return paper_clip_id

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    phone_number = models.CharField(max_length=15, blank=True, unique=True)
    course_major = models.CharField(max_length=100, blank=True)
    paper_clip_id = models.CharField(max_length=12, unique=True)  # Unique but not primary key

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'phone_number', 'course_major']

    def __str__(self):
        return self.email
