<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| هنا بتسجل مسارات الـ API الخاصة بك.
| هذه المسارات محملة عبر RouteServiceProvider وتستخدم مجموعة middleware الخاصة بـ "api".
|
*/

// إذا بدك تحمي المسارات باستخدام المصادقة (مثلاً Sanctum) شيل التعليق عن السطرين التاليين:
// Route::middleware('auth:sanctum')->group(function () {
//     Route::apiResource('appointments', AppointmentController::class);
// });

// أما لو تريد تفتحها بدون مصادقة استخدم هذا السطر:
Route::apiResource('appointments', AppointmentController::class);

// مسار اختبار للتأكد من أن API شغالة:
Route::get('/ping', function () {
    return response()->json(['message' => 'API is working']);
});
