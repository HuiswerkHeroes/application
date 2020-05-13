<?php

namespace App;

use Laratrust\Models\LaratrustPermission;

/**
 * @method static create(string[] $array)
 */
class Permission extends LaratrustPermission
{
    public $guarded = [];
}
