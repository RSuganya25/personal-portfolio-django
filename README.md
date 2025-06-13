# Personal Portfolio Website - Week 1

## Overview

This repository contains the foundational setup and initial development for my Personal Portfolio Website built with Django. The goal for Week 1 is to set up the development environment, understand Django basics, and create a simple “Hello World” app including a basic form.

---

## Week 1: Foundation & Setup

### Tasks Completed:

1. **Install Development Environment**
   - Installed Python
   - Installed Django (`pip install django`)
   - Installed VS Code with Python extension
   - Set up Git and created a GitHub repository
   - Created a Django project using `django-admin startproject mysite`
   - Ran the development server locally

2. **Complete "Hello World" Django App**
   - Created a basic Django app named `portfolio`
   - Built a simple view to display a "Hello, this is my portfolio homepage!" message
   - Connected URL patterns to the view
   - Displayed HTML response

3. **Learn Django Basics**
   - Explored Django project and app structure
   - Understood URL routing, views, and templates
   - Set up static files folder for CSS and images

4. **Follow Tutorials & Reading**
   - Worked through:
     - *Django for Beginners* (Chapters 1-3)
     - Official Django Tutorial: https://docs.djangoproject.com/en/stable/intro/

5. **Create a Simple Form**
   - Created a basic HTML form page
   - Handled form submission in a Django view
   - Displayed submitted data as a response

---

## How to Run Locally

```bash
git clone <your-repository-link>
cd mysite

pip install django

python3 manage.py migrate

python3 manage.py runserver

Open your browser and go to:
http://127.0.0.1:8000/
