<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Practitioner;

class PractitionerController extends Controller
{
    public function index()
    {
        $data['practitioner'] = Practitioner::all();
        return view('practitioner.index', $data);
    }

    public function create()
    {
        return view('practitioner.form_practitioner', [
            'titleForm' => 'Form Input Practitioner',
            'route' => ['practitioners.store'],
            'method' => 'post',
            'submitButton' => 'Submit',
            'practitioner' => new Practitioner(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'practitioner_id' => 'required|uuid|unique:practitioner,practitioner_id',
            'speciality' => 'nullable|string',
            'working_hours' => 'required|string',
            'user_id' => 'required|uuid|exists:users,id',
        ]);

        Practitioner::create([
            'practitioner_id' => $request->practitioner_id,
            'speciality' => $request->speciality,
            'working_hours' => $request->working_hours,
            'user_id' => $request->user_id,
        ]);

        return redirect()->route('practitioners.create')->with('success', 'Practitioner created successfully.');
    }

    public function show(string $id)
    {
        $practitioner = Practitioner::findOrFail($id);
        return view('practitioner.show', compact('practitioner'));
    }

    public function edit($id)
    {
        $practitioner = Practitioner::findOrFail($id);
        return view('practitioner.form_practitioner', [
            'route' => ['practitioners.update', $id],
            'titleForm' => 'Edit Practitioner',
            'method' => 'put',
            'submitButton' => 'Update',
            'practitioner' => $practitioner,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'practitioner_id' => 'required|uuid|unique:practitioner,practitioner_id,' . $id . ',practitioner_id',
            'speciality' => 'nullable|string',
            'working_hours' => 'required|string',
            'user_id' => 'required|uuid|exists:users,id',
        ]);

        $practitioner = Practitioner::findOrFail($id);
        $practitioner->update([
            'practitioner_id' => $request->practitioner_id,
            'speciality' => $request->speciality,
            'working_hours' => $request->working_hours,
            'user_id' => $request->user_id,
        ]);

        return redirect()->route('practitioners.show', $id)->with('success', 'Practitioner updated successfully.');
    }

    public function destroy(string $id)
    {
        $practitioner = Practitioner::findOrFail($id);
        $practitioner->delete();

        return redirect()->route('practitioners.index')->with('success', "Practitioner with ID {$id} deleted successfully.");
    }
}