<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // public function register(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'name' => 'required|max:255',
    //         'email' => 'email|required|unique:users',
    //         'password' => 'required|confirmed',
    //     ]);

    //     $validatedData['password'] = bcrypt($request->password);

    //     $user = User::create($validatedData);

    //     $token = $user->createToken('AppName')->accessToken;

    //     return response()->json(['token' => $token], 201);
    // }

    public function login(Request $request)
    {
        $email = strip_tags(trim($request->input('email')));
        $password = $request->input('password');

        $credentials = [
            'email' => $email,
            'password' => $password,
        ];

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('AppName')->plainTextToken;
            return response()->json(['token' => $token], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function resetPassword(Request $request)
    {
        // Implement password reset logic
    }
    public function changePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'password' => 'required|confirmed|min:8',
        ]);

        $user = $request->user();

        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json(['error' => 'Old password does not match'], 401);
        }

        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['message' => 'Password updated successfully'], 200);
    }
    public function revokeToken(Request $request)
    {
        $user = Auth::user();
        $user->tokens()->delete();
        return response()->json(['message' => 'Token revoked successfully']);
    }
}
