<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['event'] = \App\Models\Event::all();
          
             return $data;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    $data['event'] = new \App\Models\Event(); 
    $data['route'] = 'dataevent.store'; 
    $data['method'] = 'post';
    #$data['titleForm'] = 'Form Input Event'; 
    #$data['submitButton'] = 'Submit';
    #return view('event/form_event', $data); 

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
        'name' => 'required',
        'created_at' => 'required', 
        
    ]);

    $inputEvent = new \App\Models\Event(); 
    $inputEvent->name = $request->name;
    $inputEvent->created_at = $request->created_at; 
    $inputEvent->save();
    return redirect('dataevent'); 
}

    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
