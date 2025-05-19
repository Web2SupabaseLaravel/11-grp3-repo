<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $data['service'] = \App\Models\service::all();
          
             return $data;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['service'] = new \App\Models\service(); 
        $data['route'] = 'dataservice.store'; 
        $data['method'] = 'post';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $request->validate([
        'name' => 'required',
        'duration' => 'required', 
        'fee' => 'required',
        
    ]);

    $inputEvent = new \App\Models\service(); 
    $inputEvent->name = $request->name;
    $inputEvent->duration = $request->created_at; 
    $inputEvent->fee = $request->fee;
    $inputEvent->save();
    return redirect('dataservice/create');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
       $data['service'] = \App\Models\service::finOrFail($id);
        $data['route'] = ['dataservice.update', $id];
        $data['method'] = 'post';

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
        'name' => 'required',
        'duration' => 'required', 
        'fee' => 'required',
        
    ]);
    $editService =  \App\Models\service::findOrFail($id);
    $editService->update($validatedData);
    return redirect('dataservice/update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data['service'] = \App\Models\service::where('id', $id)->firstOrFail();
        $dataData->delete();
        return redirect('dataservice/delete');

    }
}
