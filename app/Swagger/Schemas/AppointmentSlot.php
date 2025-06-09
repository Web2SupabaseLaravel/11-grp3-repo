<?php

namespace App\Swagger\Schemas;

/**
 * @OA\Schema(
 *   schema="AppointmentSlot",
 *   title="Appointment Slot",
 *   description="Appointment slot model",
 *
 *   @OA\Property(property="slot_id",         type="integer", format="int64"),
 *   @OA\Property(property="practitioner_id", type="string",  format="uuid"),
 *   @OA\Property(property="service_id",      type="string",  format="uuid"),
 *   @OA\Property(property="start_time",      type="string",  format="date-time"),
 *   @OA\Property(property="end_time",        type="string",  format="date-time"),
 *   @OA\Property(property="is_booked",       type="boolean"),
 * )
 */
class AppointmentSlot
{

}
