<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolLocatiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('school_locaties', function (Blueprint $table) {
            $table->id();
            $table->string('vestigingsnummer', 6)->unique();
            $table->integer('hoofdvestiging_id');
            $table->string('naam');
            $table->string('plaatsnaam');
            $table->string('adres');
            $table->boolean('actief')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('school_locaties');
    }
}
