<?php

namespace App\Http\Controllers;

use App\Models\Reporter;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->getMessageBag(),
                'data' => []
            ]);
        }

        if (Auth::attempt($validator->validated())) {
            Auth::user()->tokens()->delete();
            $token = Auth::user()->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => 'Berhasil Login',
                'data' => [
                    'token' => $token,
                ]
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Username atau password tidak sesuai, silahkan masukkan dengan benar',
            'data' => [],
        ]);
    }

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'nik' => 'required|unique:reporters,nik',
            'password' => 'required',
        ]);

        $passBeforeHash = $validatedData['password'];

        $validatedData['password'] = Hash::make($validatedData['password']);
        $validatedData['role'] = 'reporter';

        $user = User::create($validatedData);
        $validatedData['user_id'] = $user->id;

        Reporter::create(collect($validatedData)->only('user_id', 'nik')->toArray());

        return response()->json([
            'status' => true,
            'message' => 'Berhasil Register',
            'data' => $request->all(),
        ]);

        // return redirect("/")->with("success", 'Akun berhasil dibuat silahkan login');
    }

    public function logout(Request $request)
    {
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $token->delete();

        return response()->json([
            'status' => true,
            'message' => 'Berhasil Logout',
            'data' => [],
        ]);
    }
}
