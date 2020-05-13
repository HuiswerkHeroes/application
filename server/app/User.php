<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Laratrust\Traits\LaratrustUserTrait;

/**
 * @method static where(string $string, int $int)
 */
class User extends Authenticatable
{
    use LaratrustUserTrait;
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'voornaam', 'achternaam', 'password', 'setup_afgerond', 'gebruiker_type_id', 'school_locatie_id', 'opleiding_id', 'vakken',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
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
