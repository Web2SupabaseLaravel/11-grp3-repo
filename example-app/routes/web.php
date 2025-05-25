<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;

    Route::get('dataservice', [ServiceController::class, 'index']);
    Route::get('dataservice/{service_id}', [ServiceController::class, 'show']);
    // Route::get('dataservice/create', [ServiceController::class, 'create']);
    Route::get('dataservice/{service_id}/edit', [ServiceController::class, 'edit']);


    Route::post('dataservice/create', [ServiceController::class, 'store'])->withoutMiddleware('Illuminate\Foundation\Http\Middleware\VerifyCsrfToken');
    
    Route::put('dataservice/{id}', [ServiceController::class, 'update'])->withoutMiddleware('Illuminate\Foundation\Http\Middleware\VerifyCsrfToken');
    Route::delete('dataservice/{id}', [ServiceController::class, 'destroy'])->withoutMiddleware('Illuminate\Foundation\Http\Middleware\VerifyCsrfToken');

Route::view('/', 'welcome');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__.'/auth.php';
