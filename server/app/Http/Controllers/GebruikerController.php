<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class GebruikerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * @param Request $request
     * @return mixed
     * @noinspection PhpUnused
     * @noinspection PhpUndefinedFieldInspection
     */
    public function getCurrentGebruiker(Request $request) {
        return response()->json([
            'gebruiker' => $request->auth
        ], 200);
    }
}
