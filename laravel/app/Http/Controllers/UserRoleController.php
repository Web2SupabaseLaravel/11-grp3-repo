<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserRole;
use App\Models\User; // <-- أضف هذا
use App\Models\Role; // <-- وأضف هذا

class UserRoleController extends Controller
{
    public function index()
    {
        $users = User::all();
        $roles = Role::all();

        return view('user_roles.index', compact('users', 'roles'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|uuid|exists:users,id',
            'role_id' => 'required|uuid|exists:roles,role_id',
        ]);

        $userRole = UserRole::create($validated);

        return response()->json($userRole, 201);
    }

    public function show($user_id, $role_id)
    {
        $userRole = UserRole::where('user_id', $user_id)
            ->where('role_id', $role_id)
            ->firstOrFail();

        return response()->json($userRole);
    }

    public function destroy($user_id, $role_id)
    {
        $userRole = UserRole::where('user_id', $user_id)
            ->where('role_id', $role_id)
            ->firstOrFail();

        $userRole->delete();

        return response()->json(['message' => 'UserRole deleted']);
    }
}
