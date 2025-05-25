<?php

namespace App\Http\Controllers;

use App\Models\AppointmentSlot;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Supabase\SupabaseClient;
use Illuminate\Support\Str;

class AppointmentSlotController extends Controller
{
    protected $supabase;

    public function __construct(SupabaseClient $supabase)
    {
        $this->supabase = $supabase;
    }

    /**
     * Display a listing of the resource.
     * @OA\Get(
     * path="/api/appointment-slots",
     * summary="Get all appointment slots",
     * tags={"Appointment Slots"},
     * @OA\Parameter(
     * name="page",
     * in="query",
     * description="Page number for pagination",
     * required=false,
     * @OA\Schema(type="integer", default=1)
     * ),
     * @OA\Parameter(
     * name="limit",
     * in="query",
     * description="Number of items per page",
     * required=false,
     * @OA\Schema(type="integer", default=10)
     * ),
     * @OA\Response(
     * response=200,
     * description="Successful operation",
     * @OA\JsonContent(
     * type="array",
     * @OA\Items(ref="#/components/schemas/AppointmentSlot")
     * )
     * ),
     * @OA\Response(
     * response=500,
     * description="Server error"
     * )
     * )
     */
    public function index(Request $request)
    {
        try {
            $limit = $request->query('limit', 10);
            $page = $request->query('page', 1);
            $offset = ($page - 1) * $limit;

            $response = $this->supabase->from('appointment_slots')
                                       ->select('*')
                                       ->range($offset, $offset + $limit - 1)
                                       ->execute();

            $slots = $response->data;

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            return response()->json([
                'data' => $slots,
                'current_page' => $page,
                'per_page' => $limit,
            ], 200);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to fetch appointment slots', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     * @OA\Post(
     * path="/api/appointment-slots",
     * summary="Create a new appointment slot",
     * tags={"Appointment Slots"},
     * @OA\RequestBody(
     * required=true,
     * @OA\JsonContent(ref="#/components/schemas/AppointmentSlotRequest")
     * ),
     * @OA\Response(
     * response=201,
     * description="Appointment slot created successfully",
     * @OA\JsonContent(ref="#/components/schemas/AppointmentSlot")
     * ),
     * @OA\Response(
     * response=422,
     * description="Validation error"
     * ),
     * @OA\Response(
     * response=500,
     * description="Server error"
     * )
     * )
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'practitioner_id' => 'required|uuid',
                'service_id' => 'required|uuid',
                'start_time' => 'required|date',
                'end_time' => 'required|date|after:start_time',
                'is_booked' => 'boolean',
            ]);

            $validatedData['slot_id'] = Str::uuid()->toString();
            // Default is_booked to false if not provided
            $validatedData['is_booked'] = $validatedData['is_booked'] ?? false;


            $response = $this->supabase->from('appointment_slots')
                                       ->insert([$validatedData])
                                       ->execute();

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            $slot = $response->data[0];

            return response()->json(['message' => 'Appointment slot created successfully', 'data' => $slot], 201);

        } catch (ValidationException $e) {
            return response()->json(['message' => 'Validation Error', 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create appointment slot', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     * @OA\Get(
     * path="/api/appointment-slots/{id}",
     * summary="Get a specific appointment slot by ID",
     * tags={"Appointment Slots"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * description="ID of the appointment slot to retrieve",
     * required=true,
     * @OA\Schema(type="string", format="uuid")
     * ),
     * @OA\Response(
     * response=200,
     * description="Successful operation",
     * @OA\JsonContent(ref="#/components/schemas/AppointmentSlot")
     * ),
     * @OA\Response(
     * response=404,
     * description="Appointment slot not found"
     * ),
     * @OA\Response(
     * response=500,
     * description="Server error"
     * )
     * )
     */
    public function show(string $id)
    {
        try {
            $response = $this->supabase->from('appointment_slots')
                                       ->select('*')
                                       ->eq('slot_id', $id)
                                       ->limit(1)
                                       ->execute();

            $slot = $response->data[0] ?? null;

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            if (!$slot) {
                return response()->json(['message' => 'Appointment slot not found'], 404);
            }

            return response()->json(['data' => $slot], 200);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to fetch appointment slot', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     * @OA\Put(
     * path="/api/appointment-slots/{id}",
     * summary="Update an existing appointment slot",
     * tags={"Appointment Slots"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * description="ID of the appointment slot to update",
     * required=true,
     * @OA\Schema(type="string", format="uuid")
     * ),
     * @OA\RequestBody(
     * required=true,
     * @OA\JsonContent(ref="#/components/schemas/AppointmentSlotRequest")
     * ),
     * @OA\Response(
     * response=200,
     * description="Appointment slot updated successfully",
     * @OA\JsonContent(ref="#/components/schemas/AppointmentSlot")
     * ),
     * @OA\Response(
     * response=404,
     * description="Appointment slot not found"
     * ),
     * @OA\Response(
     * response=422,
     * description="Validation error"
     * ),
     * @OA\Response(
     * response=500,
     * description="Server error"
     * )
     * )
     */
    public function update(Request $request, string $id)
    {
        try {
            $validatedData = $request->validate([
                'practitioner_id' => 'sometimes|required|uuid',
                'service_id' => 'sometimes|required|uuid',
                'start_time' => 'sometimes|required|date',
                'end_time' => 'sometimes|required|date|after:start_time',
                'is_booked' => 'sometimes|boolean',
            ]);

            $existingSlot = $this->supabase->from('appointment_slots')
                                          ->select('slot_id')
                                          ->eq('slot_id', $id)
                                          ->limit(1)
                                          ->execute()
                                          ->data[0] ?? null;

            if (!$existingSlot) {
                return response()->json(['message' => 'Appointment slot not found'], 404);
            }

            $response = $this->supabase->from('appointment_slots')
                                       ->update($validatedData)
                                       ->eq('slot_id', $id)
                                       ->execute();

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            $updatedSlot = $response->data[0] ?? null;
            if (!$updatedSlot) {
                $updatedSlot = $this->supabase->from('appointment_slots')
                                             ->select('*')
                                             ->eq('slot_id', $id)
                                             ->limit(1)
                                             ->execute()
                                             ->data[0] ?? null;
            }

            return response()->json(['message' => 'Appointment slot updated successfully', 'data' => $updatedSlot], 200);

        } catch (ValidationException $e) {
            return response()->json(['message' => 'Validation Error', 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to update appointment slot', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @OA\Delete(
     * path="/api/appointment-slots/{id}",
     * summary="Delete an appointment slot",
     * tags={"Appointment Slots"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * description="ID of the appointment slot to delete",
     * required=true,
     * @OA\Schema(type="string", format="uuid")
     * ),
     * @OA\Response(
     * response=204,
     * description="Appointment slot deleted successfully"
     * ),
     * @OA\Response(
     * response=404,
     * description="Appointment slot not found"
     * ),
     * @OA\Response(
     * response=500,
     * description="Server error"
     * )
     * )
     */
    public function destroy(string $id)
    {
        try {
            // Check for existing slot
            $existingSlot = $this->supabase->from('appointment_slots')
                                          ->select('slot_id')
                                          ->eq('slot_id', $id)
                                          ->limit(1)
                                          ->execute()
                                          ->data[0] ?? null;

            if (!$existingSlot) {
                return response()->json(['message' => 'Appointment slot not found'], 404);
            }

            // Before deleting, check if there are any appointments linked to this slot
            $linkedAppointments = $this->supabase->from('appointment')
                                                 ->select('appointment_id')
                                                 ->eq('slot_id', $id)
                                                 ->limit(1) // Just need to know if any exist
                                                 ->execute()
                                                 ->data;

            if (!empty($linkedAppointments)) {
                return response()->json(['message' => 'Cannot delete slot: appointments are linked to it. Delete linked appointments first.'], 409); // Conflict
            }

            $response = $this->supabase->from('appointment_slots')
                                       ->delete()
                                       ->eq('slot_id', $id)
                                       ->execute();

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            return response()->json(null, 204);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete appointment slot', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Get appointments for a specific slot.
     * @OA\Get(
     * path="/api/appointment-slots/{slot_id}/appointments",
     * summary="Get appointments associated with a specific slot",
     * tags={"Appointment Slots", "Appointments"},
     * @OA\Parameter(
     * name="slot_id",
     * in="path",
     * description="ID of the appointment slot",
     * required=true,
     * @OA\Schema(type="string", format="uuid")
     * ),
     * @OA\Response(
     * response=200,
     * description="Successful operation",
     * @OA\JsonContent(
     * type="array",
     * @OA\Items(ref="#/components/schemas/Appointment")
     * )
     * ),
     * @OA\Response(
     * response=404,
     * description="Appointment slot not found"
     * ),
     * @OA\Response(
     * response=500,
     * description="Server error"
     * )
     * )
     */
    public function getAppointmentsForSlot(string $slot_id)
    {
        try {
            // Check if slot exists
            $slotResponse = $this->supabase->from('appointment_slots')
                                           ->select('slot_id')
                                           ->eq('slot_id', $slot_id)
                                           ->limit(1)
                                           ->execute();
            if ($slotResponse->hasError() || empty($slotResponse->data)) {
                return response()->json(['message' => 'Appointment slot not found'], 404);
            }

            $appointmentsResponse = $this->supabase->from('appointment')
                                                   ->select('*')
                                                   ->eq('slot_id', $slot_id)
                                                   ->execute();

            if ($appointmentsResponse->hasError()) {
                throw new \Exception($appointmentsResponse->getError()->getMessage());
            }

            return response()->json(['data' => $appointmentsResponse->data], 200);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve appointments for slot', 'error' => $e->getMessage()], 500);
        }
    }
}