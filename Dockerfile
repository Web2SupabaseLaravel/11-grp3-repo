
FROM composer:2 AS composer


FROM php:8.2-fpm


RUN apt-get update \
 && apt-get install -y zip unzip git curl libpq-dev \
 && docker-php-ext-install pdo pdo_pgsql


COPY --from=composer /usr/bin/composer /usr/bin/composer


WORKDIR /var/www/html


COPY . .


RUN composer install --no-interaction --optimize-autoloader


RUN chown -R www-data:www-data storage bootstrap/cache


EXPOSE 8000


CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
