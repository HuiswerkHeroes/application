<?php

use App\SchoolHoofdvestiging;
use Illuminate\Database\Seeder;

/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

class SchoolHoofdvestigingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SchoolHoofdvestiging::create([
            'BRIN' => '25PZ',
            'gemeente' => 'AMSTERDAM',
            'naam' => 'ROC van Amsterdam'
        ]);

        SchoolHoofdvestiging::create([
            'BRIN' => '02TE',
            'gemeente' => 'AMSTELVEEN',
            'naam' => 'Hermann Wesselink College'
        ]);

        SchoolHoofdvestiging::create([
            'BRIN' => '19XY',
            'gemeente' => 'AMSTELVEEN',
            'naam' => 'Amstelveen College'
        ]);
    }
}
