<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class User extends Model
{
    use HasUuids;

    protected $table = 'users';

    protected $with = ['roles'];
       protected $visible = [
        'id',
        'email',
        'first_name',
        'last_name',
        'profile_img_url',
        'created_at',
        'updated_at',
        'roles',
    ];
    protected $fillable = ['email', 'password', 'first_name', 'last_name', 'profile_img_url', 'role_id'];

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_roles', 'user_id', 'role_id');
    }
}
