<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\UserRoleController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ForgotPasswordController;

Route::prefix('v1')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    
    // Forgot & Reset Password (Laravel)
    Route::post('forgot-password', [\App\Http\Controllers\Api\ForgotPasswordController::class, 'sendResetLinkEmail']);
    Route::post('reset-password', [\App\Http\Controllers\Api\ForgotPasswordController::class, 'resetPassword']);

    Route::get('roles', [RoleController::class, 'index']);
    Route::post('users', [UserController::class, 'store']); 

    Route::middleware('auth:api')->group(function () {
        Route::apiResource('users', UserController::class)->except(['store']);
        Route::apiResource('roles', RoleController::class)->except(['index']);

        Route::get('user-roles', [UserRoleController::class, 'index']);
        Route::post('user-roles', [UserRoleController::class, 'store'])->name('user_roles.store');
        Route::get('user-roles/{user_id}/{role_id}', [UserRoleController::class, 'show']);
        Route::delete('user-roles/{user_id}/{role_id}', [UserRoleController::class, 'destroy']);

        Route::post('logout', [AuthController::class, 'logout']);
    });
});
