<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Beheer;


use App\Http\Controllers\Controller;
use App\Role;

class RBACController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api', 'permission:beheer-rbac']);
    }

    public function getRollen()
    {
        return response()->json([
            'rollen' => Role::all(),
        ], 200);
    }

    public function getRol($id)
    {
        return response()->json([
            'rollen' => Role::where('id', $id)->with('permissions')->firstOrfail(),
        ], 200);
    }
}
