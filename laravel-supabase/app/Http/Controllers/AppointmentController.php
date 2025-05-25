<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Supabase\SupabaseClient; // Ensure this is imported
use Illuminate\Support\Str; // For UUID generation

class AppointmentController extends Controller
{
    protected $supabase;

    public function __construct(SupabaseClient $supabase)
    {
        $this->supabase = $supabase;
    }

    /**
     * Display a listing of the resource.
     * @OA\Get(
     * path="/api/appointments",
     * summary="Get all appointments",
     * tags={"Appointments"},
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
     * @OA\Items(ref="#/components/schemas/Appointment")
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

            $response = $this->supabase->from('appointment')
                                       ->select('*')
                                       ->range($offset, $offset + $limit - 1) // Supabase range is inclusive
                                       ->execute();

            $appointments = $response->data; // Supabase client returns data in a 'data' property

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            return response()->json([
                'data' => $appointments,
                'current_page' => $page,
                'per_page' => $limit,
                // You'll need to fetch total count separately for full pagination data
            ], 200);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to fetch appointments', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     * @OA\Post(
     * path="/api/appointments",
     * summary="Create a new appointment",
     * tags={"Appointments"},
     * @OA\RequestBody(
     * required=true,
     * @OA\JsonContent(ref="#/components/schemas/AppointmentRequest")
     * ),
     * @OA\Response(
     * response=201,
     * description="Appointment created successfully",
     * @OA\JsonContent(ref="#/components/schemas/Appointment")
     * ),
     * @OA\Response(
     * response=422,
     * description="Validation error",
     * @OA\JsonContent(
     * @OA\Property(property="message", type="string"),
     * @OA\Property(property="errors", type="object")
     * )
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
                'status' => 'required|string|max:255',
                'user_id' => 'required|uuid',
                'slot_id' => 'required|uuid|exists:appointment_slots,slot_id', // Ensure slot_id exists in Supabase
                'canceled_at' => 'nullable|date',
            ]);

            // Generate UUID for the new appointment
            $validatedData['appointment_id'] = Str::uuid()->toString();

            $response = $this->supabase->from('appointment')
                                       ->insert([$validatedData])
                                       ->execute();

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            // Supabase insert typically returns the inserted data
            $appointment = $response->data[0];

            return response()->json(['message' => 'Appointment created successfully', 'data' => $appointment], 201);

        } catch (ValidationException $e) {
            return response()->json(['message' => 'Validation Error', 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create appointment', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     * @OA\Get(
     * path="/api/appointments/{id}",
     * summary="Get a specific appointment by ID",
     * tags={"Appointments"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * description="ID of the appointment to retrieve",
     * required=true,
     * @OA\Schema(type="string", format="uuid")
     * ),
     * @OA\Response(
     * response=200,
     * description="Successful operation",
     * @OA\JsonContent(ref="#/components/schemas/Appointment")
     * ),
     * @OA\Response(
     * response=404,
     * description="Appointment not found"
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
            $response = $this->supabase->from('appointment')
                                       ->select('*')
                                       ->eq('appointment_id', $id)
                                       ->limit(1)
                                       ->execute();

            $appointment = $response->data[0] ?? null;

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            if (!$appointment) {
                return response()->json(['message' => 'Appointment not found'], 404);
            }

            return response()->json(['data' => $appointment], 200);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to fetch appointment', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     * @OA\Put(
     * path="/api/appointments/{id}",
     * summary="Update an existing appointment",
     * tags={"Appointments"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * description="ID of the appointment to update",
     * required=true,
     * @OA\Schema(type="string", format="uuid")
     * ),
     * @OA\RequestBody(
     * required=true,
     * @OA\JsonContent(ref="#/components/schemas/AppointmentRequest")
     * ),
     * @OA\Response(
     * response=200,
     * description="Appointment updated successfully",
     * @OA\JsonContent(ref="#/components/schemas/Appointment")
     * ),
     * @OA\Response(
     * response=404,
     * description="Appointment not found"
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
                'status' => 'sometimes|required|string|max:255',
                'user_id' => 'sometimes|required|uuid',
                'slot_id' => 'sometimes|required|uuid|exists:appointment_slots,slot_id',
                'canceled_at' => 'nullable|date',
            ]);

            // Check if appointment exists first (Supabase update doesn't return data on non-match)
            $existingAppointment = $this->supabase->from('appointment')
                                                 ->select('appointment_id')
                                                 ->eq('appointment_id', $id)
                                                 ->limit(1)
                                                 ->execute()
                                                 ->data[0] ?? null;

            if (!$existingAppointment) {
                return response()->json(['message' => 'Appointment not found'], 404);
            }

            $response = $this->supabase->from('appointment')
                                       ->update($validatedData)
                                       ->eq('appointment_id', $id)
                                       ->execute();

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            // Supabase update typically returns the updated data
            $updatedAppointment = $response->data[0] ?? null;
            if (!$updatedAppointment) {
                // If update successful but no data returned (e.g., no changes), fetch it
                $updatedAppointment = $this->supabase->from('appointment')
                                                     ->select('*')
                                                     ->eq('appointment_id', $id)
                                                     ->limit(1)
                                                     ->execute()
                                                     ->data[0] ?? null;
            }


            return response()->json(['message' => 'Appointment updated successfully', 'data' => $updatedAppointment], 200);

        } catch (ValidationException $e) {
            return response()->json(['message' => 'Validation Error', 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to update appointment', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @OA\Delete(
     * path="/api/appointments/{id}",
     * summary="Delete an appointment",
     * tags={"Appointments"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * description="ID of the appointment to delete",
     * required=true,
     * @OA\Schema(type="string", format="uuid")
     * ),
     * @OA\Response(
     * response=204,
     * description="Appointment deleted successfully"
     * ),
     * @OA\Response(
     * response=404,
     * description="Appointment not found"
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
            // Check if appointment exists first
            $existingAppointment = $this->supabase->from('appointment')
                                                 ->select('appointment_id')
                                                 ->eq('appointment_id', $id)
                                                 ->limit(1)
                                                 ->execute()
                                                 ->data[0] ?? null;

            if (!$existingAppointment) {
                return response()->json(['message' => 'Appointment not found'], 404);
            }

            $response = $this->supabase->from('appointment')
                                       ->delete()
                                       ->eq('appointment_id', $id)
                                       ->execute();

            if ($response->hasError()) {
                throw new \Exception($response->getError()->getMessage());
            }

            return response()->json(null, 204); // No content on successful delete

        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete appointment', 'error' => $e->getMessage()], 500);
        }
    }
}