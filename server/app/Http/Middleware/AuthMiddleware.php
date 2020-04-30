<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App\Http\Middleware;


use App\Gebruiker;
use Closure;
use Firebase\JWT\ExpiredException;
use Exception;
use Firebase\JWT\JWT;

class AuthMiddleware
{
    public function handle($request, Closure $next, $guard = null) {
        $token = $request->header('x-auth-token');

        // No token
        if (!$token) {
            return response()->json([
                'error' => 'Authorization token not provided.'
            ], 401);
        }

        try {
            $credentials = JWT::decode($token, env('JWT_SECRET'), ['HS256']);
        } catch (ExpiredException $e) {
            return response()->json([
                'error' => 'U bent uitgelogd, herlaad de pagina.'
            ], 401);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Invalid authorization token.'
            ], 401);
        }

        // Vind de gebruiker
        $gebruiker = Gebruiker::find($credentials->sub);

        $request->auth = $gebruiker;

        return $next($request);
    }
}
