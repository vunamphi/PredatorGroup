<?php

use App\Http\Controllers\UserConTroller;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserConTroller::class, 'index']);