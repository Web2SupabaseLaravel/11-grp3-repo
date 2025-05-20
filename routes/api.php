<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PractitionerController;

Route::resource('practitioners', PractitionerController::class);