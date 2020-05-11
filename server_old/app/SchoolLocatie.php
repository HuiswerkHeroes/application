<?php
/**
 * Copyright (c) 2020.
 * Dit bestand is aangemaakt door Tygo Egmond (tygoegmond.nl)
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $array)
 * @method static where(string $string, bool $true)
 */
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

    public function hoofdvestiging()
    {
        return $this->hasOne('App\SchoolHoofdvestiging', 'id', 'hoofdvestiging_id');
    }
}
