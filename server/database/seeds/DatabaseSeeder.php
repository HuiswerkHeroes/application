<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        Model::unguard();
        $this->call(GebruikersTableSeeder::class);
        $this->call(GebruikerTypeSeeder::class);
        $this->call(SchoolHoofdvestigingSeeder::class);
        $this->call(SchoolLocatieSeeder::class);
        $this->call(OpleidingSeeder::class);
//        Model::reguard();
    }
}
