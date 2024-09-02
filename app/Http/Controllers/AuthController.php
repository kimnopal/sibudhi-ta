<?php

namespace App\Http\Controllers;

use App\Models\Reporter;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render("Auth/Login");
    }

    public function doLogin(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($validatedData)) {
            $request->session()->regenerate();
            return redirect()->intended("/");
        }

        return back()->with('error', ['Gagal login', 'Username atau password tidak sesuai, silahkan masukkan dengan benar']);
    }

    public function register()
    {
        return Inertia::render("Auth/Register");
    }

    public function doRegister(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'nik' => 'required|unique:reporters,nik',
            'password' => 'required',
        ]);

        $validatedData['password'] = Hash::make($validatedData['password']);

        $user = User::create($validatedData);
        $validatedData['user_id'] = $user->id;

        Reporter::create(collect($validatedData)->only('user_id', 'nik'));

        if (Auth::attempt($user->only('email', 'password'))) {
            $request->session()->regenerate();
            return redirect()->intended("/");
        }

        return redirect("/")->with("success", 'Akun berhasil dibuat silahkan login');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
