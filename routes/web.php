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

//Home
Route::get('/', function () {
    return view('home');
});

//Login
Route::get('/logout', [UserController::class, 'logout']);
Route::get('/login', [UserController::class, 'login'])->name('login');
Route::post('/user/authenticate', [UserController::class, 'authenticate']);

//Usuario
Route::resource('/user', UserController::class)->only([
    'create',
    'store'
]);

//Produto
Route::resource('/product', ProductController::class)->except([
    'show'
])->middleware('auth');

//Token
Route::resource('/token', TokenController::class)->only([
    'index',
    'store',
    'destroy'
])->middleware('auth');