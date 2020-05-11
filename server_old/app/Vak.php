<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Vak extends Model
{
    /**
     * Tabel naam
     *
     * @var string
     */
    protected $table = 'vakken';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'naam'
    ];
}
