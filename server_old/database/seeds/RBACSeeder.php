<?php

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

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
        Role::create(['name' => 'Systeembeheerder']);

      /*
       * Maak Permissies aan
       * */
        Permission::create(['name' => 'beheer-rbac']);
    }
}
