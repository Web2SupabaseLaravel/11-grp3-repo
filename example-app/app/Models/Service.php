<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    public $timestamps = false; 
     use HasFactory;
    protected $table = 'service';
    protected $primaryKey = 'service_id';
    protected $keyType = 'string'; 
    public $incrementing = false; 
    protected $fillable = ['name', 'duration', 'fee'];
}
