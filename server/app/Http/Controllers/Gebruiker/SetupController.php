<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Controllers\Gebruiker;


use App\GebruikerType;
use App\Http\Controllers\Controller;
use App\Opleiding;
use App\SchoolHoofdvestiging;
use App\SchoolLocatie;
use Closure;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class SetupController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('auth:api');
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function setGebruikerType(Request $request) {
        if (Auth::user()->setup_afgerond) {
            return response()->json([
                'error' => 'Dit account is al ingesteld.'
            ], 400);
        }

        $validator = Validator::make($request->all(), [
            'typeId' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

        try {
            GebruikerType::where('id', $request->get('typeId'))->where('actief', true)->firstOrFail();
        } catch (ModelNotFoundException $ex) {
            return response()->json(['error'=> 'Er is geen actieve gebruikerType met dat typeId' ], 422);
        }

        $gebruiker = Auth::user();
        $gebruiker->gebruiker_type_id = $request->get('typeId');
        $gebruiker->school_locatie_id = null;
        $gebruiker->opleiding_id = null;
        $gebruiker->vakken = null;

        if ($gebruiker->save()) {
            return response()->json([
                'status' => 'success'
            ], 200);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getScholen(Request $request) {
        if (Auth::user()->setup_afgerond) {
            return response()->json([
                'error' => 'Dit account is al ingesteld.'
            ], 400);
        }

        $validator = Validator::make($request->all(), [
            'q' => 'required|min:3',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

        $scholen = SchoolLocatie::where('actief', true)
            ->where(function ($query) use ($request) {
                $query->where('naam', 'LIKE', '%'.$request->get('q').'%')
                    ->orWhere('adres', 'LIKE', '%'.$request->get('q').'%')
                    ->orWhere('plaatsnaam', 'LIKE', '%'.$request->get('q').'%');
            })->limit(5)->get();

        if ($scholen->count() === 0) {
            $scholen = SchoolHoofdvestiging::where('naam', 'LIKE', '%'.$request->get('q').'%')
                ->with('locaties')->get()->pluck('locaties')->flatten();
        }

        return response()->json([
            'scholen' => $scholen
        ], 200);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function setSchool(Request $request) {
        if (Auth::user()->setup_afgerond) {
            return response()->json([
                'error' => 'Dit account is al ingesteld.'
            ], 400);
        }

        $validator = Validator::make($request->all(), [
            'schoolId' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

        try {
            SchoolLocatie::where('id', $request->get('schoolId'))->where('actief', true)->firstOrFail();
        } catch (ModelNotFoundException $ex) {
            return response()->json(['error'=> 'Er is geen actieve school locatie met dat schoolId' ], 422);
        }

        if (Auth::user()->gebruiker_type_id === null) {
            return response()->json(['error'=> 'Deze actie is niet mogelijk op dit moment.' ], 422);
        }

        $gebruiker = Auth::user();
        $gebruiker->school_locatie_id = $request->get('schoolId');
        $gebruiker->opleiding_id = null;
        $gebruiker->vakken = null;

        if ($gebruiker->save()) {
            return response()->json([
                'status' => 'success'
            ], 200);
        }
    }

    /**
     * @return JsonResponse
     */
    public function getOpleidingen() {
        if (Auth::user()->setup_afgerond || Auth::user()->gebruiker_type_id !== 1) {
            return response()->json([
                'error' => 'Er is een fout opgetreden, dit account is waarschijnlijk al ingesteld.'
            ], 400);
        }

        if (Auth::user()->school_locatie_id === null) {
            return response()->json(['error'=> 'Deze actie is niet mogelijk op dit moment.' ], 422);
        }

        $opleidingen = Opleiding::where('actief', true)
            ->where('school_locatie_id', Auth::user()->school_locatie_id)
            ->get();

        return response()->json([
            'opleidingen' => $opleidingen
        ], 200);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function setOpleiding(Request $request) {
        if (Auth::user()->setup_afgerond || Auth::user()->gebruiker_type_id !== 1) {
            return response()->json([
                'error' => 'Er is een fout opgetreden, dit account is waarschijnlijk al ingesteld.'
            ], 400);
        }

        $validator = Validator::make($request->all(), [
            'opleidingId' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=> $validator->errors()->first() ], 422);
        }

        if (Auth::user()->gebruiker_type_id === null || Auth::user()->school_locatie_id === null) {
            return response()->json(['error'=> 'Deze actie is niet mogelijk op dit moment.' ], 422);
        }

        try {
            Opleiding::where('id', $request->get('opleidingId'))->where('actief', true)->where('school_locatie_id', Auth::user()->school_locatie_id)->firstOrFail();
        } catch (ModelNotFoundException $ex) {
            return response()->json(['error'=> 'Er is geen actieve opleiding met de opgegeven opleidingId.' ], 422);
        }

        $gebruiker = Auth::user();
        $gebruiker->opleiding_id = $request->get('opleidingId');
        $gebruiker->setup_afgerond = true;
        $gebruiker->vakken = null;

        if ($gebruiker->save()) {
            return response()->json([
                'status' => 'success'
            ], 200);
        }
    }
}
