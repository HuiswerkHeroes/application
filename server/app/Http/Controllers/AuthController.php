<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers;


use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function authenticate(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'wachtwoord' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('wachtwoord')])) {
            $token = Auth::user()->createToken('token');
            $expiresIn = $token->token->expires_at;
            return response()->json([
                'token' => $token->accessToken,
                'expiresIn' => $expiresIn->diffInSeconds(Carbon::now())
            ], 200);
        } else {
            return response()->json([
                'error' => 'E-mailadres komt niet overeen met het wachtwoord'
            ], 400);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function registreren(Request $request) {
        $validator = Validator::make($request->all(), [
            'voornaam' => 'required',
            'achternaam' => 'required',
            'email' => 'required|email',
            'wachtwoord' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

        // Check of er al iemand bestaat met dat wachtwoord
        $gebruiker = User::where('email', $request->input('email'))->first();
        if ($gebruiker) {
            return response()->json([
                'error' => 'Er bestaat al een gebruiker met het opgegeven e-mailadres.'
            ], 400);
        }

        $gebruiker = User::create([
            'voornaam' => ucfirst($request->input('voornaam')),
            'achternaam' => ucfirst($request->input('achternaam')),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('wachtwoord')),
        ]);

        return response()->json([
            'token' => $gebruiker->createToken('token')->accessToken
        ], 200);
    }
}
