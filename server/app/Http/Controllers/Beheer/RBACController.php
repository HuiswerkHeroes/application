<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Beheer;


use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;

class RBACController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');

//      TODO: Zorg ervoor dat dit alleen toegankelijk is met een bapaalde permissie
    }

    public function getRollen()
    {
        return response()->json([
            'rollen' => Role::all(),
        ], 200);
    }
}
