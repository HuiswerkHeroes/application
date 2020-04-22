<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Opleiding extends Model
{
    /**
     * Tabel naam
     *
     * @var string
     */
    protected $table = 'opleidingen';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'school_locatie_id', 'naam', 'vakken', 'actief'
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'actief' => 'boolean',
    ];
}
