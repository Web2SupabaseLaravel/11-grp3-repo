<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Practitioner;
use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     title="Practitioner API",
 *     version="1.0",
 *     description="API for managing practitioners"
 * )
 */
class PractitionerController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/practitioners",
     *     summary="List all practitioners",
     *     tags={"Practitioners"},
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Practitioner"))
     *     )
     * )
     */
    public function index()
    {
        $practitioners = Practitioner::with('user')->get();
        return response()->json($practitioners);
    }

    /**
     * @OA\Post(
     *     path="/api/practitioners",
     *     summary="Create a new practitioner",
     *     tags={"Practitioners"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Practitioner")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Practitioner created",
     *         @OA\JsonContent(ref="#/components/schemas/Practitioner")
     *     )
     * )
     */
    public function store(Request $request)
    {
        $practitioner = Practitioner::create($request->all());
        return response()->json($practitioner, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/practitioners/{id}",
     *     summary="Get a practitioner by ID",
     *     tags={"Practitioners"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Practitioner")
     *     ),
     *     @OA\Response(response=404, description="Practitioner not found")
     * )
     */
    public function show(string $id)
    {
        $practitioner = Practitioner::with('user')->findOrFail($id);
        return response()->json($practitioner);
    }

    /**
     * @OA\Put(
     *     path="/api/practitioners/{id}",
     *     summary="Update a practitioner",
     *     tags={"Practitioners"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Practitioner")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Practitioner updated",
     *         @OA\JsonContent(ref="#/components/schemas/Practitioner")
     *     )
     * )
     */
    public function update(Request $request, string $id)
    {
        $practitioner = Practitioner::findOrFail($id);
        $practitioner->update($request->all());
        return response()->json($practitioner);
    }

    /**
     * @OA\Delete(
     *     path="/api/practitioners/{id}",
     *     summary="Delete a practitioner",
     *     tags={"Practitioners"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(response=204, description="Practitioner deleted"),
     *     @OA\Response(response=404, description="Practitioner not found")
     * )
     */
    public function destroy(string $id)
    {
        $practitioner = Practitioner::findOrFail($id);
        $practitioner->delete();
        return response()->json(null, 204);
    }
}