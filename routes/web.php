<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserConTroller;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserConTroller::class, 'index'])->middleware('access.time');



Route::controller(HomeController::class)-> group(function(){
    Route::get('/', 'index');
    Route::get('/about', 'about');

});
// Route::get('/login', function(){
//     return 'Login page';
// })->name('login');


Route::prefix('users')->controller(UsersController::class)->name('users')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/create', 'create')->name('create');
    Route::post('/store', 'store')->name('store');
});
