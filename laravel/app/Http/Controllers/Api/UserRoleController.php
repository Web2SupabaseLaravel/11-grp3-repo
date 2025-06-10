<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use OpenApi\Annotations as OA;

class UserRoleController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/user-roles",
     *     summary="Get list of all user-role assignments",
     *     tags={"UserRoles"},
     *     @OA\Response(
     *         response=200,
     *         description="List of user-role assignments",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/UserRole")
     *         )
     *     )
     * )
     */
    public function index()
    {
        // استرجاع كل الربطات بين المستخدمين والأدوار
        $userRoles = [];
        $users = User::with('roles')->get();

        foreach ($users as $user) {
            foreach ($user->roles as $role) {
                $userRoles[] = [
                    'user_id' => $user->id,
                    'role_id' => $role->id,
                    'role_name' => $role->name,
                ];
            }
        }

        return response()->json($userRoles);
    }

    /**
     * @OA\Post(
     *     path="/api/v1/user-roles",
     *     summary="Assign a role to a user",
     *     tags={"UserRoles"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/UserRoleCreateRequest")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Role assigned to user",
     *         @OA\JsonContent(ref="#/components/schemas/UserRole")
     *     )
     * )
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|uuid|exists:users,id',
            'role_id' => 'required|integer|exists:roles,id',
        ]);

        $user = User::findOrFail($validated['user_id']);
        $user->roles()->syncWithoutDetaching([$validated['role_id']]);

        return response()->json([
            'user_id' => $user->id,
            'role_id' => $validated['role_id'],
        ], 201);
    }

    /**
     * @OA\Get(
     *     path="/api/v1/user-roles/{user_id}/{role_id}",
     *     summary="Get user-role assignment",
     *     tags={"UserRoles"},
     *     @OA\Parameter(
     *         name="user_id",
     *         in="path",
     *         description="User UUID",
     *         required=true,
     *         @OA\Schema(type="string", format="uuid")
     *     ),
     *     @OA\Parameter(
     *         name="role_id",
     *         in="path",
     *         description="Role ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User-role assignment details",
     *         @OA\JsonContent(ref="#/components/schemas/UserRole")
     *     ),
     *     @OA\Response(response=404, description="Assignment not found")
     * )
     */
    public function show($user_id, $role_id)
    {
        $user = User::with('roles')->findOrFail($user_id);

        $role = $user->roles->firstWhere('id', $role_id);

        if (!$role) {
            return response()->json(['message' => 'Assignment not found'], 404);
        }

        return response()->json([
            'user_id' => $user->id,
            'role_id' => $role->id,
            'role_name' => $role->name,
        ]);
    }

    /**
     * @OA\Delete(
     *     path="/api/v1/user-roles/{user_id}/{role_id}",
     *     summary="Remove a role assignment from a user",
     *     tags={"UserRoles"},
     *     @OA\Parameter(
     *         name="user_id",
     *         in="path",
     *         description="User UUID",
     *         required=true,
     *         @OA\Schema(type="string", format="uuid")
     *     ),
     *     @OA\Parameter(
     *         name="role_id",
     *         in="path",
     *         description="Role ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response=200, description="Assignment deleted"),
     *     @OA\Response(response=404, description="Assignment not found")
     * )
     */
    public function destroy($user_id, $role_id)
    {
        $user = User::findOrFail($user_id);
        $removed = $user->roles()->detach($role_id);

        if ($removed === 0) {
            return response()->json(['message' => 'Assignment not found'], 404);
        }

        return response()->json(['message' => 'Deleted']);
    }
}
