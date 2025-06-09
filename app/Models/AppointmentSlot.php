<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentSlot extends Model
{
    public $timestamps = false;
    protected $primaryKey = 'slot_id';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'practitioner_id',
        'service_id',
        'start_time',
        'end_time',
        'is_booked',
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time'   => 'datetime',
        'is_booked'  => 'boolean',
    ];

    public function practitioner()
    {
        return $this->belongsTo(Practitioner::class, 'practitioner_id');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
