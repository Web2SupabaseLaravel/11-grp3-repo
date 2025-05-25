<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Supabase\SupabaseClient;

class SupabaseServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(SupabaseClient::class, function ($app) {
            return new SupabaseClient(
                config('services.supabase.url'),
                config('services.supabase.key')
            );
        });
    }

    public function boot()
    {
        //
    }
}