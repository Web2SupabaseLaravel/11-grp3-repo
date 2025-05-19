<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $table = 'appointment';

    protected $primaryKey = 'appointment_id';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'appointment_id',
        'status',
        'created_at',
        'canceled_at',
        'user_id',
        'slot_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function slot()
    {
        return $this->belongsTo(Slot::class, 'slot_id', 'id');
    }
}
