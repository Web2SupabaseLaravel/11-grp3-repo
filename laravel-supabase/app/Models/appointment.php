<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str; // For UUIDs

class Appointment extends Model
{
    // You don't need a protected $table if the model name is singular of the table name
    // protected $table = 'appointment'; // If your table name is 'appointment'

    public $incrementing = false; // UUIDs are not auto-incrementing
    protected $keyType = 'string'; // Primary key is a string (UUID)
    protected $primaryKey = 'appointment_id'; // Specify primary key

    protected $fillable = [
        'appointment_id', // Make sure to fill this if generating in Laravel
        'status',
        'user_id',
        'slot_id',
        'canceled_at',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'canceled_at' => 'datetime',
    ];

    // Relationship to AppointmentSlot
    public function slot()
    {
        return $this->belongsTo(AppointmentSlot::class, 'slot_id', 'slot_id');
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