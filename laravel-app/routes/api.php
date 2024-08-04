<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
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

//Category
Route::get("/categories", [CategoryController::class, 'index']);

//Product Route
Route::get("/products", [ProductController::class, 'index']);
Route::get("/products/category/{cat}", [ProductController::class, 'category']);
Route::get("/product/{id}", [ProductController::class, 'show']);