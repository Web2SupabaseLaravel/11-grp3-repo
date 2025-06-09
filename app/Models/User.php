<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    protected $keyType = 'string'; 
    public $incrementing = false;  
    protected $fillable = ['id', 'email', 'password', 'first_name', 'last_name', 'profile_img_url'];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}