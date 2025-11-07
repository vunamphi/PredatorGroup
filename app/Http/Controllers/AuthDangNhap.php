<?php

namespace App\Http\Controllers;

use App\Http\Requests\DangNhapRequest;
use Illuminate\Http\Request;

class AuthDangNhap extends Controller
{
    public function dangnhap(){
        return view('auth.dangnhap');
    }
    public function postdangnhap(DangNhapRequest $request){

    }
}
