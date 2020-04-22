<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Gebruiker;


use App\GebruikerType;
use App\Http\Controllers\Controller;
use Closure;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SetupController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function setGebruikerType(Request $request) {
        if ($request->auth->setup_afgerond) {
            return response()->json([
                'error' => 'Dit account is al ingesteld.'
            ], 400);
        }

        $validator = Validator::make($request->all(), [
            'typeId' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

        try {
            GebruikerType::where('id', $request->get('typeId'))->where('actief', true)->firstOrFail();
        } catch (ModelNotFoundException $ex) {
            return response()->json(['error'=> 'Er is geen actieve gebruiker type met dat typeId' ], 422);
        }

        $gebruiker = $request->auth;
        $gebruiker->opleiding_id = null;
        $gebruiker->vakken = null;
        $gebruiker->gebruiker_type_id = $request->get('typeId');

        if ($gebruiker->save()) {
            return response()->json([
                'status' => 'success'
            ], 200);
        }
    }
}
