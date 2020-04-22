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
        $this->middleware('auth');
    }

    public function __invoke()
    {
        $types = GebruikerType::all();

        return response()->json([
            'types' => $types
        ], 200);
    }
}
