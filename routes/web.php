<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PractitionerController;

Route::resource('practitioners', PractitionerController::class);


Route::view('/', 'welcome');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__.'/auth.php';
