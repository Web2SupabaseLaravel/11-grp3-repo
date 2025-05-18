<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;

/**
 * @OA\Info(title="Notification API", version="1.0")
 */
class NotificationController extends Controller
{
    /**
     * @OA\Get(path="/api/notifications", summary="Get all notifications",
     *  @OA\Response(response=200, description="List of notifications")
     * )
     */
    public function index()
    {
        return response()->json(Notification::all(), 200);
    }

    /**
     * @OA\Post(path="/api/notifications", summary="Create a notification",
     *  @OA\RequestBody(required=true, @OA\JsonContent(
     *      @OA\Property(property="title", type="string"),
     *      @OA\Property(property="message", type="string"),
     *      @OA\Property(property="type", type="string")
     *  )),
     *  @OA\Response(response=201, description="Notification created")
     * )
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'message' => 'required|string',
            'type' => 'nullable|string',
        ]);

        $notification = Notification::create($data);
        return response()->json($notification, 201);
    }

    /**
     * @OA\Get(path="/api/notifications/{id}", summary="Get a notification by ID",
     *  @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *  @OA\Response(response=200, description="Notification found"),
     *  @OA\Response(response=404, description="Not found")
     * )
     */
    public function show($id)
    {
        $notification = Notification::find($id);
        if (!$notification) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($notification, 200);
    }

    /**
     * @OA\Put(path="/api/notifications/{id}", summary="Update a notification",
     *  @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *  @OA\RequestBody(@OA\JsonContent(
     *      @OA\Property(property="title", type="string"),
     *      @OA\Property(property="message", type="string"),
     *      @OA\Property(property="type", type="string")
     *  )),
     *  @OA\Response(response=200, description="Notification updated"),
     *  @OA\Response(response=404, description="Not found")
     * )
     */
    public function update(Request $request, $id)
    {
        $notification = Notification::find($id);
        if (!$notification) {
            return response()->json(['message' => 'Not found'], 404);
        }

        $data = $request->validate([
            'title' => 'string',
            'message' => 'string',
            'type' => 'nullable|string',
        ]);

        $notification->update($data);
        return response()->json($notification, 200);
    }

    /**
     * @OA\Delete(path="/api/notifications/{id}", summary="Delete a notification",
     *  @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *  @OA\Response(response=204, description="Deleted"),
     *  @OA\Response(response=404, description="Not found")
     * )
     */
    public function destroy($id)
    {
        $notification = Notification::find($id);
        if (!$notification) {
            return response()->json(['message' => 'Not found'], 404);
        }

        $notification->delete();
        return response()->json(null, 204);
    }
}
