<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Gebruiker;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GebruikerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * @param Request $request
     * @return mixed
     * @noinspection PhpUnused
     * @noinspection PhpUndefinedFieldInspection
     */
    public function getCurrentGebruiker(Request $request) {
        return response()->json([
            'gebruiker' => Auth::user(),
        ], 200);
    }
}
