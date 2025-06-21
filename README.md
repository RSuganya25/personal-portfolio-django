# Personal Portfolio Website

This is a personal portfolio website built using Django. It includes a homepage, a simple form for project details, and dynamic features with CSS and JavaScript. It demonstrates how to use Django views, templates, static files, models, and the admin panel.

# How to Run the Project

git clone <your-repository-link>
cd mysite

# Install Django 

pip install django

# Apply Migrations

python manage.py migrate

# Create a Superuser (Optional, for admin access)

python manage.py createsuperuser

# Run the Development Server

python manage.py runserver

# Open in your browser

Go to:
http://127.0.0.1:8000/ — Main site
http://127.0.0.1:8000/admin — Admin panel

# Project Structure

mysite/
├── mysite/
│   ├── settings.py
│   └── urls.py
├── portfolio/
│   ├── templates/
│   │   └── home.html
│   ├── static/
│   │   └── portfolio/
│   │       ├── styles.css
│   │       └── script.js
│   ├── views.py
│   ├── urls.py
│   ├── models.py
│   └── admin.py
├── db.sqlite3
└── manage.py

# Notes

- Static files (CSS, JavaScript) are stored in portfolio/static/portfolio/.
- Templates are stored in portfolio/templates/.
- To add projects via Django Admin, login to /admin and use the Project model.
- JavaScript is used to dynamically display project cards from the form.

# Technologies Used

- Django
- HTML & CSS
- JavaScript
- SQLite (default Django database)
