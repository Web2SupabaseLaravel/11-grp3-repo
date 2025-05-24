<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__.'/auth.php';

use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserRoleController;

Route::apiResource('roles', RoleController::class);

Route::get('/user-roles', [UserRoleController::class, 'index']);
Route::post('/user-roles', [UserRoleController::class, 'store'])->name('user_roles.store');
Route::get('/user-roles/{user_id}/{role_id}', [UserRoleController::class, 'show']);
Route::delete('/user-roles/{user_id}/{role_id}', [UserRoleController::class, 'destroy']);

Route::get('/manage-roles', [RoleController::class, 'showForm'])->name('roles.form');
