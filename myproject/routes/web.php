<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PasswordResetController;

Route::get('datapassword_reset', [PasswordResetController::class, 'index']);
Route::get('datapassword_reset/{id}', [PasswordResetController::class, 'show']);
// Route::get('datapassword_reset/create', [PasswordResetController::class, 'create']);
Route::get('datapassword_reset/{id}/edit', [PasswordResetController::class, 'edit']);

Route::post('datapassword_reset/create', [PasswordResetController::class, 'store'])
    ->withoutMiddleware('Illuminate\Foundation\Http\Middleware\VerifyCsrfToken');

Route::put('datapassword_reset/{id}', [PasswordResetController::class, 'update'])
    ->withoutMiddleware('Illuminate\Foundation\Http\Middleware\VerifyCsrfToken');

Route::delete('datapassword_reset/{id}', [PasswordResetController::class, 'destroy'])
    ->withoutMiddleware('Illuminate\Foundation\Http\Middleware\VerifyCsrfToken');

Route::view('/', 'welcome');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__.'/auth.php';
