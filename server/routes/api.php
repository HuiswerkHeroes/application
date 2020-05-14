<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//
Route::group(['prefix' => 'v1'], function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('inloggen', 'AuthController@authenticate');
        Route::post('registreren', 'AuthController@registreren');
    });
    Route::group(['prefix' => 'gebruiker'], function () {
        Route::group(['prefix' => 'setup'], function () {
            Route::post('type', 'Gebruiker\SetupController@setGebruikerType');
            Route::get('scholen', 'Gebruiker\SetupController@getScholen');
            Route::post('school', 'Gebruiker\SetupController@setSchool');
            Route::get('opleidingen', 'Gebruiker\SetupController@getOpleidingen');
            Route::post('opleiding', 'Gebruiker\SetupController@setOpleiding');
        });
        Route::group(['prefix' => 'instellingen'], function () {
            Route::post('wachtwoord', 'Gebruiker\InstellingenController@veranderWachtwoord');
        });

        Route::get('', 'Gebruiker\GebruikerController@getCurrentGebruiker');
        Route::get('types', 'Gebruiker\TypeController');
    });

    Route::group(['prefix' => 'beheer'], function () {
        Route::group(['prefix' => 'rbac'], function () {
            Route::group(['prefix' => 'rollen'], function () {
                Route::get('', 'Beheer\RBACController@getRollen');
                Route::post('', 'Beheer\RBACController@createRol');
                Route::get('{id}', 'Beheer\RBACController@getRol');
                Route::delete('{rol}', 'Beheer\RBACController@deleteRol');
            });

            Route::group(['prefix' => 'permissies'], function () {
                Route::get('', 'Beheer\RBACController@getPermissies');
            });
        });
    });
});
