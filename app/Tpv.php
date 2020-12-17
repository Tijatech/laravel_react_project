<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tpv extends Model
{
    protected $table = 'tpv_users';
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname', 'lastname','phone', 'email'
        // ,'username', 'password',
        // 'position', 'language','team_member', 'meter_check_show','user_type'
    ];
    //
}
