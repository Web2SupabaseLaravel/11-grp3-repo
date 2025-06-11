<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class PasswordReset extends Model
{
    public $timestamps = false; 
     use HasFactory;
    protected $table = 'password_reset';
    protected $primaryKey = 'token';
    protected $keyType = 'string'; 
    public $incrementing = false; 
    protected $fillable = ['expires_at', 'user_id'];
}
