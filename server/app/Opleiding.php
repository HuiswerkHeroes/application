<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string, bool $true)
 * @method static create(array $array)
 */
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

    public function gebruikers()
    {
        return $this->hasMany('App\Gebruiker', 'opleiding_id', 'id');
    }
}
