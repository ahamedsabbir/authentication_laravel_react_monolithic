<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SanctumController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



//auth route
Route::post("/register", [SanctumController::class, 'register']);
Route::post("/login", [SanctumController::class, 'login']);
Route::post("/logout", [SanctumController::class, 'logout'])->middleware('auth:sanctum');

//profile
Route::get("/profile/{id}", [SanctumController::class, 'profile'])->middleware('auth:sanctum');
Route::post("/profile/image/{id}", [SanctumController::class, 'profilePhoto'])->middleware('auth:sanctum');