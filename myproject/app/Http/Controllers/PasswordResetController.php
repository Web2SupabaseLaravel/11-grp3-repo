<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PasswordReset;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PasswordResetController extends Controller
{
    public function index()
    {
        $password_reset = PasswordReset::all();
        return response()->json($password_reset);
    }

    public function create()
    {
        return response()->json([
            'message' => 'Use POST to /datapassword_reset to create a password reset entry.'
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'token' => 'required',
            'expires_at' => 'required|date',
            'user_id' => 'required',
        ]);

        $password_reset = PasswordReset::create($validated);

        return response()->json([
            'message' => 'Password reset created successfully.',
            'id' => $password_reset->id,
            'password_reset' => $password_reset
        ], 201);
    }

    public function show(string $id)
    {
        try {
            $password_reset = PasswordReset::findOrFail($id);
            return response()->json($password_reset);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Password reset not found.'], 404);
        }
    }

    public function edit(string $id)
    {
        try {
            $password_reset = PasswordReset::findOrFail($id);
            return response()->json([
                'password_reset' => $password_reset,
                'message' => 'Use PUT to /datapassword_reset/{id} to update.'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Password reset not found.'], 404);
        }
    }

    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'token' => 'required',
            'expires_at' => 'required|date',
            'user_id' => 'required',
        ]);

        try {
            $password_reset = PasswordReset::findOrFail($id);
            $password_reset->update($validated);

            return response()->json([
                'message' => 'Password reset updated successfully.',
                'password_reset' => $password_reset
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Password reset not found.'], 404);
        }
    }

    public function destroy(string $id)
    {
        try {
            $password_reset = PasswordReset::findOrFail($id);
            $password_reset->delete();

            return response()->json([
                'message' => 'Password reset deleted successfully.'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'Password reset not found.'], 404);
        }
    }
}
