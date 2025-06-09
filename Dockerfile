# المرحلة الأولى: جلب Composer
FROM composer:2 AS composer

# المرحلة الثانية: بناء بيئة PHP
FROM php:8.2-fpm

# تثبيت الأدوات وامتدادات PostgreSQL و PDO
RUN apt-get update \
 && apt-get install -y zip unzip git curl libpq-dev \
 && docker-php-ext-install pdo pdo_pgsql

# نسخ Composer من المرحلة الأولى
COPY --from=composer /usr/bin/composer /usr/bin/composer

# تعيين مجلد العمل
WORKDIR /var/www/html

# نسخ كافة ملفات المشروع
COPY . .

# تثبيت حزم PHP عبر Composer
RUN composer install --no-interaction --optimize-autoloader

# إعداد الأذونات لمجلدات التخزين والـ cache
RUN chown -R www-data:www-data storage bootstrap/cache

# فتح المنفذ 8000 (لـ artisan serve)
EXPOSE 8000

# نقطة الدخول لتشغيل خادم Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
