<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * @OA\Schema(
 *     schema="Practitioner",
 *     type="object",
 *     @OA\Property(property="practitioner_id", type="string", example="uuid-1"),
 *     @OA\Property(property="specialty", type="string", example="Cardiology"),
 *     @OA\Property(property="working_hours", type="string", example="9 AM - 5 PM"),
 *     @OA\Property(property="user_id", type="string", example="uuid-2")
 * )
 */

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
    
    public function user()
    {
        return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
    }
}
