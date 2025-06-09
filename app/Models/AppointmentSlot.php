<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentSlot extends Model
{
    // إذا كنتَ تستخدم incrementing=true و PK هو slot_id
    public $timestamps = false;
    protected $primaryKey = 'slot_id';
    public $incrementing = true;
    protected $keyType = 'int';

    // الحقول القابلة للتعبئة
    protected $fillable = [
        'practitioner_id',
        'service_id',
        'start_time',
        'end_time',
        'is_booked',
    ];

    // تحويل الأنواع تلقائيًا
    protected $casts = [
        'start_time' => 'datetime',
        'end_time'   => 'datetime',
        'is_booked'  => 'boolean',
    ];

    // علاقة مع Practitioners
    public function practitioner()
    {
        return $this->belongsTo(Practitioner::class, 'practitioner_id');
    }

    // علاقة مع Services
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
