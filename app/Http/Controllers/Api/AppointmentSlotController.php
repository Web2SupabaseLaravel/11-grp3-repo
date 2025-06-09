<?php

namespace App\Http\Controllers\Api;

use App\Models\AppointmentSlot;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class AppointmentSlotController extends Controller
{
    /**
     * @OA\Get(
     *   path="/api/appointment-slots",
     *   tags={"AppointmentSlots"},
     *   summary="List all appointment slots",
     *   @OA\Response(
     *     response=200,
     *     description="A list of slots",
     *     @OA\JsonContent(
     *       type="array",
     *       @OA\Items(ref="#/components/schemas/AppointmentSlot")
     *     )
     *   )
     * )
     */
    public function index()
    {
        $slots = AppointmentSlot::all();
        return response()->json($slots, 200);
    }
    /**
     * @OA\Post(
     *   path="/api/appointment-slots",
     *   tags={"AppointmentSlots"},
     *   summary="Create a new slot",
     *   @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *       required={"practitioner_id","service_id","start_time","end_time"},
     *       @OA\Property(property="practitioner_id", type="string", format="uuid"),
     *       @OA\Property(property="service_id",      type="string", format="uuid"),
     *       @OA\Property(property="start_time",      type="string", format="date-time"),
     *       @OA\Property(property="end_time",        type="string", format="date-time")
     *     )
     *   ),
     *   @OA\Response(response=201, description="Created",
     *     @OA\JsonContent(ref="#/components/schemas/AppointmentSlot")
     *   )
     * )
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'practitioner_id' => 'required|uuid',
            'service_id'      => 'required|uuid',
            'start_time'      => 'required|date',
            'end_time'        => 'required|date|after:start_time',
            'is_booked'       => 'boolean',
        ]);

        $slot = AppointmentSlot::create($data);
        return response()->json($slot, 201);
    }
    /**
     * @OA\Get(
     *   path="/api/appointment-slots/{slot_id}",
     *   tags={"AppointmentSlots"},
     *   summary="Get a specific slot",
     *   @OA\Parameter(
     *     name="slot_id", in="path", required=true,
     *     @OA\Schema(type="string", format="uuid")
     *   ),
     *   @OA\Response(response=200, description="Slot details",
     *     @OA\JsonContent(ref="#/components/schemas/AppointmentSlot")
     *   ),
     *   @OA\Response(response=404, description="Not Found")
     * )
     */
    public function show($id)
    {
        $slot = AppointmentSlot::findOrFail($id);
        return response()->json($slot, 200);
    }
    /**
     * @OA\Put(
     *   path="/api/appointment-slots/{slot_id}",
     *   tags={"AppointmentSlots"},
     *   summary="Update a slot",
     *   @OA\Parameter(
     *     name="slot_id", in="path", required=true,
     *     @OA\Schema(type="string", format="uuid")
     *   ),
     *   @OA\RequestBody(
     *     @OA\JsonContent(
     *       @OA\Property(property="is_booked", type="boolean")
     *     )
     *   ),
     *   @OA\Response(response=200, description="Updated",
     *     @OA\JsonContent(ref="#/components/schemas/AppointmentSlot")
     *   )
     * )
     */
    public function update(Request $request, $id)
    {
        $slot = AppointmentSlot::findOrFail($id);
        $data = $request->validate([
            'practitioner_id' => 'uuid|exists:practitioners,practitioner_id',
            'service_id'      => 'integer|exists:services,service_id',
            'start_time'      => 'date',
            'end_time'        => 'date|after:start_time',
            'is_booked'       => 'boolean',
        ]);

        $slot->update($data);
        return response()->json($slot, 200);
    }
    /**
     * @OA\Delete(
     *   path="/api/appointment-slots/{slot_id}",
     *   tags={"AppointmentSlots"},
     *   summary="Delete a slot",
     *   @OA\Parameter(
     *     name="slot_id", in="path", required=true,
     *     @OA\Schema(type="string", format="uuid")
     *   ),
     *   @OA\Response(response=204, description="No Content")
     * )
     */
    public function destroy($id)
    {
        AppointmentSlot::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}