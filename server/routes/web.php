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
        Route::group(['prefix' => 'gebruikers'], function () {
            Route::group(['prefix' => 'setup'], function () {
                Route::post('gebruiker/type', 'Gebruiker\SetupController@setGebruikerType');
                Route::get('scholen', 'Gebruiker\SetupController@getScholen');
                Route::post('gebruiker/school', 'Gebruiker\SetupController@setSchool');
                Route::get('opleidingen', 'Gebruiker\SetupController@getOpleiding');
                Route::post('gebruiker/opleiding', 'Gebruiker\SetupController@setOpleiding');
            });
            Route::get('', 'Gebruiker\GebruikerController@getCurrentGebruiker');
            Route::get('types', 'Gebruiker\TypeController');
        });
    });
});
