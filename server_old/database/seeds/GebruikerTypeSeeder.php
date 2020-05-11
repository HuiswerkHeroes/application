<?php

use App\GebruikerType;

/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

class GebruikerTypeSeeder extends \Illuminate\Database\Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GebruikerType::create([
            'naam' => 'Leerling / Student'
        ]);

        GebruikerType::create([
            'naam' => 'Docent'
        ]);
    }
}
