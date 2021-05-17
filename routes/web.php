<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::post('/user/authenticate', [UserController::class, 'authenticate']);
Route::get('/login', [UserController::class, 'login'])->name('login');
Route::get('/logout', [UserController::class, 'logout']);
Route::resource('/user', UserController::class);

Route::resource('/product', ProductController::class)->middleware('auth');

Route::resource('/api', TokenController::class);