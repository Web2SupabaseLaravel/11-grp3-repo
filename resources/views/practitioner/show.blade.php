<x-app-layout>
    <x-slot name="header">
        <h1>Practitioner Details</h1>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <p><strong>Speciality:</strong> {{ $practitioner->speciality ?? 'N/A' }}</p>
                    <p><strong>Working Hours:</strong> {{ $practitioner->working_hours ?? 'N/A' }}</p>
                    <p><strong>User ID:</strong> {{ $practitioner->user_id ?? 'N/A' }}</p>
                    <a href="{{ route('practitioners.index') }}" class="btn btn-secondary mt-4">Back</a>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>