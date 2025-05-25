<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AppointmentSlotController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Appointment Routes
Route::apiResource('appointments', AppointmentController::class);

// Appointment Slot Routes
Route::apiResource('appointment-slots', AppointmentSlotController::class);

// Example of a nested route for appointments within a slot (optional)
Route::get('appointment-slots/{slot_id}/appointments', [AppointmentSlotController::class, 'getAppointmentsForSlot']);