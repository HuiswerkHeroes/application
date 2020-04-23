<?php

use App\SchoolHoofdvestiging;
use App\SchoolLocatie;
use Illuminate\Database\Seeder;

/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

class SchoolLocatieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $hoofdvestiging = SchoolHoofdvestiging::where('BRIN', '25PZ')->first();
        SchoolLocatie::create([
            'vestigingsnummer' => '25PZ46',
            'hoofdvestiging_id' => $hoofdvestiging->id,
            'naam' => 'MBO College Amstelland - Zuidoost',
            'plaatsnaam' => 'Amstelveen',
            'adres' => 'Maalderij 37'
        ]);

        $hoofdvestiging = SchoolHoofdvestiging::where('BRIN', '02TE')->first();
        SchoolLocatie::create([
            'vestigingsnummer' => '02TE00',
            'hoofdvestiging_id' => $hoofdvestiging->id,
            'naam' => 'Hermann Wesselink College',
            'plaatsnaam' => 'Amstelveen',
            'adres' => 'Startbaan 3'
        ]);

        $hoofdvestiging = SchoolHoofdvestiging::where('BRIN', '19XY')->first();
        SchoolLocatie::create([
            'vestigingsnummer' => '19XY00',
            'hoofdvestiging_id' => $hoofdvestiging->id,
            'naam' => 'Amstelveen College',
            'plaatsnaam' => 'Amstelveen',
            'adres' => 'Sportlaan 27'
        ]);
    }
}
