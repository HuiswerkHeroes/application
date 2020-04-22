<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class GebruikerType extends Model
{
    /**
     * Tabel naam
     *
     * @var string
     */
    protected $table = 'gebruiker_type';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'naam', 'actief'
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'actief' => 'boolean',
    ];
}