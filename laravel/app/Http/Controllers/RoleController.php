<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RoleController extends Controller
{
    public function index()
    {
        return Role::all();
    }

    public function showForm()
{
    return view('Roles.form_roles', [
        'users' => \App\Models\User::get()->mapWithKeys(function ($user) {
            return [$user->id => $user->first_name . ' ' . $user->last_name];
        }),

        'roles' => \App\Models\Role::pluck('name', 'role_id'),
    ]);
}


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $role = Role::create([
            'role_id' => Str::uuid(),
            'name' => $validated['name'],
        ]);

        return response()->json($role, 201);
    }

    public function show(string $role_id)
    {
        return Role::findOrFail($role_id);
    }

    public function update(Request $request, string $role_id)
    {
        $role = Role::findOrFail($role_id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $role->update($validated);

        return response()->json($role);
    }

    public function destroy(string $role_id)
    {
        $role = Role::findOrFail($role_id);
        $role->delete();

        return response()->json(['message' => 'Role deleted']);
    }
}
