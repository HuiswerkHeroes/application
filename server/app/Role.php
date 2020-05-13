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
}
