<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Gebruiker;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class InstellingenController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function veranderWachtwoord(Request $request) {
        $validator = Validator::make($request->all(), [
            'nieuwWachtwoord' => 'required|string|min:6',
            'oudWachtwoord' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

        $gebruiker = Auth::user();

        if (!Hash::check($request->get('oudWachtwoord'), $gebruiker->password)) {
            return response()->json(['error'=> 'Je oude wachtwoord klopt niet.' ], 403);
        }

       $gebruiker->password = Hash::make($request->get('nieuwWachtwoord'));

        if ($gebruiker->save()) {
            return response()->json(['status' => 'success', 'message' => 'Het wachtwoord is gewijzigd.' ], 200);
        } else {
            return response()->json(['error'=> 'Er is een onbekende fout opgetreden.' ], 500);
        }
    }
}
