<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('users', [UserController::class, 'getAllUsers']);
Route::get('users/{id}', [UserController::class, 'getUserById']);
Route::post('users', [UserController::class, 'storeUser']);
Route::patch('users/{id}', [UserController::class, 'patchUser']);
Route::delete('users/{id}', [UserController::class, 'deleteUser']);