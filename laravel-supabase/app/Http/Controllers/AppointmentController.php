<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;

class AppointmentController extends Controller
{
    // 1. جلب كل المواعيد
    public function index()
    {
        $appointments = Appointment::all();
        return response()->json($appointments);
    }

    // 2. جلب موعد معين
    public function show($id)
    {
        $appointment = Appointment::find($id);

        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }

        return response()->json($appointment);
    }

    // 3. إنشاء موعد جديد
    public function store(Request $request)
    {
        // تحقق من صحة البيانات
        $validatedData = $request->validate([
            'status' => ['required', 'string'],
            'user_id' => ['required', 'uuid'],
            'slot_id' => ['required', 'uuid'],
            'canceled_at' => ['nullable', 'date'],
        ]);

        $appointment = new Appointment();
        $appointment->appointment_id = (string) Str::uuid();  // توليد UUID تلقائياً
        $appointment->status = $validatedData['status'];
        $appointment->user_id = $validatedData['user_id'];
        $appointment->slot_id = $validatedData['slot_id'];
        $appointment->canceled_at = $validatedData['canceled_at'] ?? null;

        $appointment->save();

        return response()->json($appointment, 201);
    }

    // 4. تعديل موعد موجود
    public function update(Request $request, $id)
    {
        $appointment = Appointment::find($id);
        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }

        $validatedData = $request->validate([
            'status' => ['sometimes', 'string'],
            'user_id' => ['sometimes', 'uuid'],
            'slot_id' => ['sometimes', 'uuid'],
            'canceled_at' => ['nullable', 'date'],
        ]);

        $appointment->fill($validatedData);
        $appointment->save();

        return response()->json($appointment);
    }

    // 5. حذف موعد
    public function destroy($id)
    {
        $appointment = Appointment::find($id);
        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }

        $appointment->delete();

        return response()->json(['message' => 'Appointment deleted successfully']);
    }
}
