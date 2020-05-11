<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Gebruiker;


use App\GebruikerType;
use App\Http\Controllers\Controller;

class TypeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function __invoke()
    {
        $types = GebruikerType::where('actief', true)->get();

        return response()->json([
            'types' => $types
        ], 200);
    }
}
