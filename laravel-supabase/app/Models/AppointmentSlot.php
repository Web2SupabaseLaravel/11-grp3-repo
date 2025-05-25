<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str; // For UUIDs

class AppointmentSlot extends Model
{
    // protected $table = 'appointment_slots'; // If your table name is 'appointment_slots'

    public $incrementing = false;
    protected $keyType = 'string';
    protected $primaryKey = 'slot_id';

    protected $fillable = [
        'slot_id',
        'practitioner_id',
        'service_id',
        'start_time',
        'end_time',
        'is_booked',
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'is_booked' => 'boolean',
    ];

    // Relationship to Appointment
    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'slot_id', 'slot_id');
    }

    // Generate UUID for new models
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }
}