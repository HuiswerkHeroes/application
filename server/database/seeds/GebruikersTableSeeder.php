<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

use Illuminate\Database\Seeder;
use App\Gebruiker;
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
        Gebruiker::create([
            'email' => 'tygo.egmond@icloud.com',
            'voornaam' => 'Tygo',
            'achternaam' => 'Egmond',
            'wachtwoord' => Hash::make('123456'),
        ]);
    }
}
