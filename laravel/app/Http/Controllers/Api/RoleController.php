<?php

namespace App\Http\Controllers\Api;

use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use OpenApi\Annotations as OA;

class RoleController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/roles",
     *     summary="Get list of all roles",
     *     tags={"Roles"},
     *     @OA\Response(
     *         response=200,
     *         description="List of roles",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Role"))
     *     )
     * )
     */
    public function index()
    {
        return response()->json(Role::all());
    }

    /**
     * @OA\Post(
     *     path="/api/v1/roles",
     *     summary="Create a new role",
     *     tags={"Roles"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/RoleCreateRequest")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Role created",
     *         @OA\JsonContent(ref="#/components/schemas/Role")
     *     )
     * )
     */
    public function store(Request $request)
    {
        $role = Role::create($request->validate(['name' => 'required|string']));
        return response()->json($role, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/v1/roles/{id}",
     *     summary="Get a role by ID",
     *     tags={"Roles"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Role ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Role data",
     *         @OA\JsonContent(ref="#/components/schemas/Role")
     *     ),
     *     @OA\Response(response=404, description="Role not found")
     * )
     */
    public function show($id)
    {
        return response()->json(Role::findOrFail($id));
    }

    /**
     * @OA\Put(
     *     path="/api/v1/roles/{id}",
     *     summary="Update a role by ID",
     *     tags={"Roles"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Role ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/RoleCreateRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Updated role data",
     *         @OA\JsonContent(ref="#/components/schemas/Role")
     *     ),
     *     @OA\Response(response=404, description="Role not found")
     * )
     */
    public function update(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        $role->update($request->validate(['name' => 'required|string']));
        return response()->json($role);
    }

    /**
     * @OA\Delete(
     *     path="/api/v1/roles/{id}",
     *     summary="Delete a role by ID",
     *     tags={"Roles"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Role ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response=200, description="Role deleted"),
     *     @OA\Response(response=404, description="Role not found")
     * )
     */
    public function destroy($id)
    {
        Role::destroy($id);
        return response()->json(['message' => 'Deleted']);
    }
}
