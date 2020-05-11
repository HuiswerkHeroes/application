<?php

use App\Opleiding;
use App\SchoolLocatie;
use Illuminate\Database\Seeder;

/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

class OpleidingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Gespecialiseerd Pedagogisch Medewerker'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Gespecialiseerd Pedagogisch Medewerker (Flex-opleiding)'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'House of Business'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'International Business Management'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'International Marketing Management'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Junior Assistent-Accountant'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Juridisch-Administratief Dienstverlener'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Juridisch-Administratief Dienstverlener (23+-traject)'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Juridisch-Administratief Dienstverlener (Flex-opleiding)'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Management Assistant'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Medewerker Human Resource Management (HRM) (23+ traject)'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Medewerker Human Resource Management (HRM) (Flex-opleiding)'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Medewerker Marketing & Communicatie'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Ondernemer Retail'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Onderwijsassistent'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Software Developer'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '25PZ46')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'Sport & Gezondheid'
        ]);


        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '02TE00')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'VMBO-TL'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '02TE00')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'VMBO-TL (TTO)'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '02TE00')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'HAVO'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '02TE00')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'HAVO (TTO)'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '02TE00')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'VWO'
        ]);

        $schoolLocatie = SchoolLocatie::where('vestigingsnummer', '02TE00')->first();
        Opleiding::create([
            'school_locatie_id' => $schoolLocatie->id,
            'naam' => 'VWO (TTO)'
        ]);
    }
}
