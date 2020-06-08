<?php

use App\Permission;
use App\Role;
use App\User;

/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

class RBACSeeder extends \Illuminate\Database\Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      /*
       * Maak Rollen aan
       * */
        $sbRol = Role::create([
                    'name' => 'systeembeheerder',
                    'display_name' => 'Systeembeheerder',
                ]);


      /*
       * Maak Permissies aan
       * */
        $beheerRbac = Permission::create([
            'name' => 'beheer-rbac',
            'display_name' => 'Beheer - RBAC',
        ]);

        $debugInfo = Permission::create([
            'name' => 'debug-info',
            'display_name' => 'Debug - Informatie',
        ]);

        /*
         * Link Permissies aan Rollen
         * */
        $sbRol->syncPermissions([$beheerRbac, $debugInfo]);

        /*
         * Link Gebruiker aan Rol
         * */
        $user = User::where('id', 1)->firstOrFail();
        $user->attachRole($sbRol);
    }
}
