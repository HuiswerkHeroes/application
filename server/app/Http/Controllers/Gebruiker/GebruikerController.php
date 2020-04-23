<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Gebruiker;


use App\Gebruiker;
use App\Http\Controllers\Controller;
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
        $gebruiker = Gebruiker::where('id', $request->auth->id)
            ->with('gebruikerType')
            ->with('schoolLocatie')
            ->with('opleiding')
            ->firstOrFail();

        return response()->json([
            'gebruiker' => $gebruiker,
        ], 200);
    }
}
