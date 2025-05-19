<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Practitioner extends Model
{
    protected $table = 'practitioner';
    protected $primaryKey = 'practitioner_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'practitioner_id',
        'specialty',
        'working_hours',
        'user_id',
    ];
    public $timestamps = false;
}
