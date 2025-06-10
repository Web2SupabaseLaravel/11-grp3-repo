<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     version="1.0.0",
 *     title="User API Documentation",
 *     description="API documentation for User endpoints",
 *     @OA\Contact(
 *         email="support@example.com"
 *     )
 * )
 */

class UserController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/users",
     *     summary="Get list of all users",
     *     tags={"Users"},
     *     @OA\Response(
     *         response=200,
     *         description="List of users",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/User"))
     *     )
     * )
     */
    public function index()
    {
        return response()->json(User::all());
    }

    /**
     * @OA\Post(
     *     path="/api/v1/users",
     *     summary="Create a new user",
     *     tags={"Users"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/UserCreateRequest")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="User created",
     *         @OA\JsonContent(ref="#/components/schemas/User")
     *     )
     * )
     */
    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/v1/users/{id}",
     *     summary="Get a user by ID",
     *     tags={"Users"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="User ID",
     *         required=true,
     *         @OA\Schema(type="string", format="uuid")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User data",
     *         @OA\JsonContent(ref="#/components/schemas/User")
     *     ),
     *     @OA\Response(response=404, description="User not found")
     * )
     */
    public function show($id)
    {
        return response()->json(User::findOrFail($id));
    }

    /**
     * @OA\Put(
     *     path="/api/v1/users/{id}",
     *     summary="Update a user by ID",
     *     tags={"Users"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="User ID",
     *         required=true,
     *         @OA\Schema(type="string", format="uuid")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/UserUpdateRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Updated user data",
     *         @OA\JsonContent(ref="#/components/schemas/User")
     *     ),
     *     @OA\Response(response=404, description="User not found")
     * )
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    /**
     * @OA\Delete(
     *     path="/api/v1/users/{id}",
     *     summary="Delete a user by ID",
     *     tags={"Users"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="User ID",
     *         required=true,
     *         @OA\Schema(type="string", format="uuid")
     *     ),
     *     @OA\Response(response=200, description="User deleted"),
     *     @OA\Response(response=404, description="User not found")
     * )
     */
    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(['message' => 'Deleted successfully']);
    }
}
