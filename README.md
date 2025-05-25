# Laravel CRUD Project with Supabase and Swagger Documentation

This project is a Laravel application implementing CRUD operations using Supabase as the database, with API documentation provided via Swagger. The project includes two related models: `User` and `Practitioner`. This README provides a comprehensive guide to set up, configure, and run the project, as well as details about its structure and usage.

#### Project Overview
- **Created by**: Mahmoud (mahmoudze)
- **Last Updated**: May 25, 2025, 08:26 AM EEST
- **GitHub Repository**: [https://github.com/Web2SupabaseLaravel/11-grp3-repo.git]

#### Requirements
- PHP >= 8.0
- Composer
- Node.js and npm
- Supabase account
- Laravel CLI

## Setup Instructions

### 1. Clone the Repository
git clone https://github.com/Web2SupabaseLaravel/11-grp3-repo.git
cd laravel-project

##2. Install Dependencies
_Install PHP dependencies:
composer install
_Install JavaScript dependencies:
npm install
npm run build
##3. Configure Environment File:
Update database settings if needed:
DB_CONNECTION=pgsql
DB_HOST=your-supabase-host
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your-supabase-password
##4. Run Migrations
Create the practitioner table (Note: The users table is assumed to exist in the database):
php artisan migrate
##6. Start the Server
Run the Laravel server:
php artisan serve
_The application will be available at: http://localhost:8000
##Accessing API Documentation
_The API is documented using Swagger and can be accessed at:
http://localhost:8000/api/documentation
Project Structure
Models
User: Pre-existing table with fields: id, email, password, first_name, last_name, profile_img_url, created_at, updated_at.
Practitioner: Created table with fields: id, specialty, working_hours, user_id (foreign key linking to users table).
Relationships
User has a hasOne relationship with Practitioner.
Practitioner has a belongsTo relationship with User.
#CRUD#Supabase#Swagger
Additional Notes
_The project includes a simple UI using Laravel Blade and Tailwind CSS.
_You can interact with the API via the UI (e.g., viewing or adding practitioners).
_Submission deadline: May 20, 2025.
Resources
_Laravel Documentation
_Supabase Documentation
_Swagger Documentation
_Laravel Swagger Package
ه
