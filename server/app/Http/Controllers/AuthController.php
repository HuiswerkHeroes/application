<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers;


use App\Gebruiker;
use Firebase\JWT\JWT;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    /**
     * @param Gebruiker $gebruiker
     * @return string
     */
    protected function jwt(Gebruiker $gebruiker) {
        $payload = [
            'iss' => 'homeworkheroes-api', // Issuer of the token
            'sub' => $gebruiker->id, // Subject of the token
            'iat' => time(), // Time when the token was issued
            'exp' => time() + 60 * 60 // Expiration time
        ];

        return JWT::encode($payload, env('JWT_SECRET'));
    }

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

        $gebruiker = Gebruiker::where('email', $request->input('email'))->first();

        // Check of de gebruiker bestaat
        if (!$gebruiker) {
            return response()->json([
                'error' => 'E-mailadres komt niet overeen met het wachtwoord'
            ], 400);
        }

        // Verifieer het wachtwoord en genereer token
        if (Hash::check($request->input('wachtwoord'), $gebruiker->wachtwoord)) {
            return response()->json([
                'token' => $this->jwt($gebruiker)
            ], 200);
        } else {
            return response()->json([
                'error' => 'E-mailadres komt niet overeen met het wachtwoord'
            ], 400);
        }
    }

    public function registreren(Request $request) {
        /** @noinspection PhpUnhandledExceptionInspection */
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
        $gebruiker = Gebruiker::where('email', $request->input('email'))->first();
        if ($gebruiker) {
            return response()->json([
                'error' => 'Er bestaat al een gebruiker met het opgegeven e-mailadres.'
            ], 400);
        }

        $gebruiker = Gebruiker::create([
            'voornaam' => ucfirst($request->input('voornaam')),
            'achternaam' => ucfirst($request->input('achternaam')),
            'email' => $request->input('email'),
            'wachtwoord' => Hash::make($request->input('wachtwoord')),
        ]);

        return response()->json([
            'token' => $this->jwt($gebruiker)
        ], 200);
    }
}
