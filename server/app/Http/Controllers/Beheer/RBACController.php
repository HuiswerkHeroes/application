<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Beheer;


use App\Http\Controllers\Controller;
use App\Permission;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

    public function createRol(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'weergavenaam' => 'required|string|unique:roles,display_name',
            'systeemnaam' => 'required|alpha_dash|unique:roles,name',
            'permissies' => 'required|array'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

//        Check alle permissies of ze wel bestaan
        $permissieCount = Permission::whereIn('id', $request->get('permissies'))->count();
        if (count($request->get('permissies')) !== $permissieCount) {
            return response()->json(['error'=> 'Permissies zijn incorrect. Probeer het opnieuw.' ], 400);
        }

//        Maak Rol en sync alle permissies
        $rol = Role::create([
            'name' => $request->get('systeemnaam'),
            'display_name' => $request->get('weergavenaam'),
            'description' => $request->get('beschrijving') ?? null
        ]);

        $rol->syncPermissions($request->get('permissies'));

        if ($rol) {
            return response()->json(['status' => 'success', 'message' => 'De rol is toegevoegd.', 'rol' => $rol ], 200);
        } else {
            return response()->json(['error'=> 'Er is een onbekende fout opgetreden.' ], 500);
        }
    }

    public function getPermissies()
    {
        return response()->json([
            'permissies' => Permission::all(),
        ], 200);
    }
}
