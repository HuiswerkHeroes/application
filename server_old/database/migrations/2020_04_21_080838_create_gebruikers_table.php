<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGebruikersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gebruikers', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('voornaam');
            $table->string('achternaam');
            $table->string('wachtwoord');
            $table->boolean('setup_afgerond')->default(false);
            $table->integer('gebruiker_type_id')->nullable();
            $table->integer('school_locatie_id')->nullable();
            $table->integer('opleiding_id')->nullable();
            $table->text('vakken')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gebruikers');
    }
}
