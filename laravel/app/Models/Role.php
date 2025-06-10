<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Role extends Model
{
    use HasFactory;

    protected $table = 'roles';
    protected $primaryKey = 'role_id';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false; // 

    protected $fillable = [
        'role_id',
        'name',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->role_id)) {
                $model->role_id = (string) Str::uuid();
            }
        });
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_roles', 'role_id', 'user_id');
    }

    // Accessor for $role->id
    public function getIdAttribute()
    {
        return $this->attributes['role_id'];
    }
}
