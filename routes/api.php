<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\UserRoleController;
use App\Http\Controllers\Api\UserController;

Route::prefix('v1')->group(function () {
    //  Users API
    Route::apiResource('users', UserController::class);

    //  Roles API
    Route::apiResource('roles', RoleController::class);

    //  User-Role API
    Route::get('user-roles', [UserRoleController::class, 'index']);
    Route::post('user-roles', [UserRoleController::class, 'store'])->name('user_roles.store');
    Route::get('user-roles/{user_id}/{role_id}', [UserRoleController::class, 'show']);
    Route::delete('user-roles/{user_id}/{role_id}', [UserRoleController::class, 'destroy']);
});