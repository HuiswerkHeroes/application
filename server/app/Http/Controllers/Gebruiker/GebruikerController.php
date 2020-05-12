<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Gebruiker;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;

class GebruikerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * @return mixed
     * @noinspection PhpUnused
     * @noinspection PhpUndefinedFieldInspection
     */
    public function getCurrentGebruiker() {
        $gebruiker = User::where('id', Auth::id())
            ->with('gebruikerType')
            ->with('schoolLocatie')
            ->with('opleiding')
            ->firstOrFail();

        return response()->json([
            'gebruiker' => $gebruiker,
        ], 200);
    }
}
