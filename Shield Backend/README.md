# Shield Backend

Focused Django + Django REST Framework backend for the frontend shop/catalog area only.

## Architecture

- `config`: project-level settings and URL wiring
- `catalog`: shop/product domain with model, admin, serializers, API views, URLs, tests, and sample seed command
- `media/products/`: uploaded product images served by Django in development

This backend intentionally supports only:

- `GET /api/products/`
- `GET /api/products/<slug>/`

It does not include cart, checkout, payments, orders, auth, inquiries, reviews, stock, or other ecommerce features.

## Setup

1. Create a PostgreSQL database and set environment variables.

PowerShell example:

```powershell
$env:POSTGRES_DB="shield_backend"
$env:POSTGRES_USER="postgres"
$env:POSTGRES_PASSWORD="your-password"
$env:POSTGRES_HOST="127.0.0.1"
$env:POSTGRES_PORT="5432"
```

You can also copy values from `.env.example` into your own environment management approach.

2. Run migrations:

```powershell
python manage.py migrate
```

3. Create an admin user:

```powershell
python manage.py createsuperuser
```

4. Optionally seed sample products:

```powershell
python manage.py seed_products
```

5. Start the server:

```powershell
python manage.py runserver
```

## Frontend Mapping

- `/shop` should call `GET /api/products/`
- `/shop/:slug` should call `GET /api/products/<slug>/`
- `image` is returned as a usable media URL for rendering product images from the backend
- Invalid slugs correctly return `404 Not Found`

## PostgreSQL Notes

- The project now uses PostgreSQL as the default database backend.
- Database credentials are read from environment variables instead of being hardcoded.
- `psycopg2-binary` is already available in this environment, so Django can connect to PostgreSQL once your database is running.
