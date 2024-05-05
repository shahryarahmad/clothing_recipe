<?php

use App\Http\Controllers\ChemicalsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipiesController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::post('/register', 'AuthController@register');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', 'AuthController@logout');



Route::middleware('auth:sanctum')->group(function () {
    Route::resource('chemicals', ChemicalsController::class);
    Route::resource('recipies', RecipiesController::class);
    Route::post('/password/reset', 'AuthController@resetPassword');
});