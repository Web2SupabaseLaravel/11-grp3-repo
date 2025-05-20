<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PasswordResetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
   
$data['password_reset'] = \App\Models\PasswordReset::all();
return $data;

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {


{$data['password_reset'] = new \App\Models\PasswordReset;
$data['route'] = 'datapassword_reset.store';
$data['method'] = 'post';
//$data['titleForm'] = 'Form Input PasswordReset';
//$data['submitButton'] = 'Submit';
//return view('password_reset/form_password_reset', $data);


}
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
        'token' => 'required',
        'expires_at' => 'required', 
        'user_id' => 'required', 
    ]);

    $inputPasswordReset = new \App\Models\PasswordReset(); 
    $inputPasswordReset->name = $request->name;
    $inputPasswordReset->expires_at = $request->expires_at;  
    $inputPasswordReset->user_id = $request->puser_id; 
    $inputPasswordReset->save();
    return redirect('datapassword_reset/create');
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
       
{
    $data['password_reset'] = \App\Models\PasswordReset::findOrFail($id);
    $data['route'] = ['datapassword_reset.update', $id];
    $data['method'] = 'put';
    //$data['title_form'] = 'Formulir Edit PasswordReset';
    //$data['submit_button'] = 'Perbarui';

   // return view('password_reset/form_password_reset', $data);
}
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
{
    $validatedData = $request->validate([
        'token' => 'required',
        'expires_at' => 'required',
        'user_id' => 'required',
    ]);

    $editPasswordReset = \App\Models\PasswordReset::findOrFail($id);
    $editPasswordReset->update($validatedData);

    return redirect('datapassword_reset/update');
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       
{
    $deleteData = \App\Models\PasswordReset::where('id', $id)->firstOrFail();
    $deleteData->delete();

    return redirect('datapassword_reset/delete');
}
    }
}
