<?php

use App\Http\Middleware\CheckAccessTime;
use App\Http\Middleware\PhanQuyenAdmin;
<<<<<<< HEAD
use App\Http\Middleware\PreventGoogleIfLoggedIn;
=======
>>>>>>> 0a0b0f5e852948a3bd0bc9ad9c3794c312c95a8b
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then:function(){
            Route::middleware('web')
            ->group(base_path('routes/admin.php'));
        }
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->alias([
<<<<<<< HEAD
            'admin' => PhanQuyenAdmin::class,
            'google.guest' => PreventGoogleIfLoggedIn::class,
=======
            'admin' => PhanQuyenAdmin::class
>>>>>>> 0a0b0f5e852948a3bd0bc9ad9c3794c312c95a8b
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
