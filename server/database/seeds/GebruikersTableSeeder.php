<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class GebruikersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'tygo.egmond@icloud.com',
            'voornaam' => 'Tygo',
            'achternaam' => 'Egmond',
            'password' => Hash::make('123456'),
        ]);
    }
}
