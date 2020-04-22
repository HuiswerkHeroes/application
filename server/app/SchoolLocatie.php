<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class SchoolLocatie extends Model
{
    /**
     * Tabel naam
     *
     * @var string
     */
    protected $table = 'school_locaties';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'vestigingsnummer', 'hoofdvestiging_id', 'naam', 'plaatsnaam', 'adres', 'actief'
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'actief' => 'boolean',
    ];

    /**
     * @param $value
     * @noinspection PhpUnused
     */
    public function setVestigingsnummerAttribute($value)
    {
        $this->attributes['vestigingsnummer'] = strtoupper($value);
    }

    /**
     * @param $value
     * @noinspection PhpUnused
     */
    public function setPlaatsnaamAttribute($value)
    {
        $this->attributes['plaatsnaam'] = strtoupper($value);
    }

    /**
     * @param $value
     * @noinspection PhpUnused
     */
    public function setAdresAttribute($value)
    {
        $this->attributes['adres'] = strtoupper($value);
    }
}
