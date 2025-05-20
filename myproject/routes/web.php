<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PasswordResetController;

Route::resource('datapassword_reset', PasswordResetController::class);

Route::view('/', 'welcome');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__.'/auth.php';
