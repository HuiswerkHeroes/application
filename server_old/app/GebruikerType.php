<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(string[] $array)
 * @method static where(string $string, bool $true)
 */
class GebruikerType extends Model
{
    /**
     * Tabel naam
     *
     * @var string
     */
    protected $table = 'gebruiker_types';

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

    public function gebruikers()
    {
        return $this->hasMany('App\Gebruiker', 'gebruiker_type_id', 'id');
    }
}
