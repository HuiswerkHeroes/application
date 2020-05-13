<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Beheer;


use App\Http\Controllers\Controller;
use App\Permission;
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
            'rol' => Role::where('id', $id)->with('permissions')->firstOrfail(),
        ], 200);
    }

    public function getPermissies()
    {
        return response()->json([
            'permissies' => Permission::all(),
        ], 200);
    }
}
