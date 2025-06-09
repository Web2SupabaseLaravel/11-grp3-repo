<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AppointmentSlotController;

Route::middleware('api')->group(function () {
    Route::apiResource('appointment-slots', AppointmentSlotController::class);
});
