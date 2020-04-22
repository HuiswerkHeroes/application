<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class SchoolHoofdvestiging extends Model
{
    /**
     * Tabel naam
     *
     * @var string
     */
    protected $table = 'school_hoofdvestigingen';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'BRIN', 'gemeente', 'naam'
    ];

    /** @noinspection PhpUnused */
    public function setBRINAttribute($value)
    {
        $this->attributes['BRIN'] = strtoupper($value);
    }

    /** @noinspection PhpUnused */
    public function setGemeenteAttribute($value)
    {
        $this->attributes['gemeente'] = strtoupper($value);
    }
}
