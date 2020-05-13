<?php

namespace App;

use Laratrust\Models\LaratrustRole;

/**
 * @method static create(string[] $array)
 * @method static where(string $string, $id)
 */
class Role extends LaratrustRole
{
    public $guarded = [];

    /**
     * @var string[]
     */
    protected $casts = [
        'created_at'  => 'datetime:d-m-Y H:00',
        'updated_at' => 'datetime:d-m-Y H:00',
    ];
}
