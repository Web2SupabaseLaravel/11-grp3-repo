<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return response()->json($services);
    }

    public function create()
    {
        return response()->json(['message' => 'Use POST to /dataservice to create a service']);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'duration' => 'required',
            'fee' => 'required',
        ]);

        $service = Service::create($validated);
        return response()->json([
            'message' => 'Service created successfully',
            'service' => $service
        ], 201);
    }

    public function show(string $id)
    {
        $service = Service::findOrFail($id);
        return response()->json($service);
    }

    public function edit(string $id)
    {
        $service = Service::findOrFail($id);
        return response()->json([
            'service' => $service,
            'message' => 'Use PUT to /dataservice/{service_id} to update'
        ]);
    }

    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required',
            'duration' => 'required',
            'fee' => 'required',
        ]);

        $service = Service::findOrFail($id);
        $service->update($validated);

        return response()->json([
            'message' => 'Service updated successfully',
            'service' => $service
        ]);
    }

    public function destroy(string $id)
    {
        $service = Service::findOrFail($id);
        $service->delete();

        return response()->json(['message' => 'Service deleted successfully']);
    }
}