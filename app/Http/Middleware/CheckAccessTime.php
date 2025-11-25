<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAccessTime
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $now = Carbon::now();
        $start = Carbon::createFromTime(8,0);
        $end = Carbon::createFromTime(17, 0);
        if($now->lessThan($start) || $now->greaterThan($end)){
<<<<<<< HEAD
        return response('Lỗi bạn không được vào vào giờ này', 403);
=======
return response('Lỗi bạn không được vào vào giờ này', 403);
>>>>>>> 0a0b0f5e852948a3bd0bc9ad9c3794c312c95a8b
        }
        return $next($request);
    }
}
