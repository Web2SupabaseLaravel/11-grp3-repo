<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 * version="1.0.0",
 * title="Laravel Supabase API Documentation",
 * description="API documentation for the Laravel application interacting with Supabase for Appointment and AppointmentSlot models.",
 * @OA\Contact(
 * email="your_email@example.com"
 * ),
 * @OA\License(
 * name="Apache 2.0",
 * url="http://www.apache.org/licenses/LICENSE-2.0.html"
 * )
 * )
 *
 * @OA\Server(
 * url=L5_SWAGGER_CONST_HOST,
 * description="API Server"
 * )
 *
 * @OA\SecurityScheme(
 * type="apiKey",
 * in="header",
 * name="Authorization",
 * securityScheme="bearerAuth"
 * )
 *
 * @OA\Tag(
 * name="Appointments",
 * description="API Endpoints for Appointments"
 * )
 * @OA\Tag(
 * name="Appointment Slots",
 * description="API Endpoints for Appointment Slots"
 * )
 *
 * @OA\Schema(
 * schema="Appointment",
 * type="object",
 * title="Appointment",
 * properties={
 * @OA\Property(property="appointment_id", type="string", format="uuid", example="a1b2c3d4-e5f6-7890-1234-567890abcdef"),
 * @OA\Property(property="status", type="string", example="pending"),
 * @OA\Property(property="created_at", type="string", format="date-time", example="2024-05-25T10:00:00Z"),
 * @OA\Property(property="canceled_at", type="string", format="date-time", nullable=true, example="2024-05-25T11:00:00Z"),
 * @OA\Property(property="user_id", type="string", format="uuid", example="12345678-1234-5678-1234-567812345678"),
 * @OA\Property(property="slot_id", type="string", format="uuid", example="abcdef12-3456-7890-abcd-ef1234567890")
 * }
 * )
 *
 * @OA\Schema(
 * schema="AppointmentRequest",
 * type="object",
 * title="Appointment Request",
 * required={"status", "user_id", "slot_id"},
 * properties={
 * @OA\Property(property="status", type="string", example="pending"),
 * @OA\Property(property="user_id", type="string", format="uuid", example="12345678-1234-5678-1234-567812345678"),
 * @OA\Property(property="slot_id", type="string", format="uuid", example="abcdef12-3456-7890-abcd-ef1234567890"),
 * @OA\Property(property="canceled_at", type="string", format="date-time", nullable=true, example="2024-05-25T11:00:00Z")
 * }
 * )
 *
 * @OA\Schema(
 * schema="AppointmentSlot",
 * type="object",
 * title="Appointment Slot",
 * properties={
 * @OA\Property(property="slot_id", type="string", format="uuid", example="abcdef12-3456-7890-abcd-ef1234567890"),
 * @OA\Property(property="practitioner_id", type="string", format="uuid", example="98765432-1234-5678-1234-567812345678"),
 * @OA\Property(property="service_id", type="string", format="uuid", example="fedcba98-7654-3210-fedc-ba9876543210"),
 * @OA\Property(property="start_time", type="string", format="date-time", example="2024-05-25T09:00:00Z"),
 * @OA\Property(property="end_time", type="string", format="date-time", example="2024-05-25T10:00:00Z"),
 * @OA\Property(property="is_booked", type="boolean", example=false)
 * }
 * )
 *
 * @OA\Schema(
 * schema="AppointmentSlotRequest",
 * type="object",
 * title="Appointment Slot Request",
 * required={"practitioner_id", "service_id", "start_time", "end_time"},
 * properties={
 * @OA\Property(property="practitioner_id", type="string", format="uuid", example="98765432-1234-5678-1234-567812345678"),
 * @OA\Property(property="service_id", type="string", format="uuid", example="fedcba98-7654-3210-fedc-ba9876543210"),
 * @OA\Property(property="start_time", type="string", format="date-time", example="2024-05-25T09:00:00Z"),
 * @OA\Property(property="end_time", type="string", format="date-time", example="2024-05-25T10:00:00Z"),
 * @OA\Property(property="is_booked", type="boolean", nullable=true, example=false)
 * }
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}