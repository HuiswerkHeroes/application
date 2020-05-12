<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

/**
 * @method static create(array $array)
 * @method static where(string $string, $input)
 * @method static find($sub)
 * @property mixed id
 */
class Gebruiker extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    protected $table = 'gebruikers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'voornaam', 'achternaam', 'wachtwoord', 'setup_afgerond', 'gebruiker_type_id', 'school_locatie_id', 'opleiding_id', 'vakken',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'wachtwoord',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'setup_afgerond' => 'boolean',
    ];

    public function gebruikerType()
    {
        return $this->hasOne('App\GebruikerType', 'id', 'gebruiker_type_id');
    }

    public function schoolLocatie()
    {
        return $this->hasOne('App\SchoolLocatie', 'id', 'school_locatie_id');
    }

    public function opleiding()
    {
        return $this->hasOne('App\Opleiding', 'id', 'opleiding_id');
    }
}