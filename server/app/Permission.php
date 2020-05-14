<?php

namespace App;

use Laratrust\Models\LaratrustPermission;

/**
 * @method static create(string[] $array)
 * @method static whereIn(string $string, $get)
 */
class Permission extends LaratrustPermission
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
