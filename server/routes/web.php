<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

//$router->get('/', function () use ($router) {
//    return $router->app->version();
//});

use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'api'], function () {
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
                Route::get('rollen', 'Beheer\RBACController@getRollen');
            });
        });
    });
});
