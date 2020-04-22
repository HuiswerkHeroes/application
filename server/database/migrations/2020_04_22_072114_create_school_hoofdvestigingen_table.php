<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolHoofdvestigingenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('school_hoofdvestigingen', function (Blueprint $table) {
            $table->id();
            $table->string('BRIN', 4)->unique();
            $table->string('gemeente');
            $table->string('naam');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('school_hoofdvestigingen');
    }
}
