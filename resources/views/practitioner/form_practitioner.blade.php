<x-app-layout>
    <x-slot name="header">
        <h1>{{ $titleForm }}</h1>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    @if (session('success'))
                        <div class="alert alert-success mb-4">
                            {{ session('success') }}
                        </div>
                    @endif

                    <form action="{{ count($route) > 1 ? route($route[0], $route[1]) : route($route[0]) }}" method="POST">
    @csrf
    @if ($method === 'put')
        @method('PUT')
    @endif

    <div class="mb-4">
        <label for="practitioner_id" class="block text-sm font-medium text-gray-700">Practitioner ID</label>
        <input type="text" name="practitioner_id" id="practitioner_id" value="{{ old('practitioner_id', $practitioner->practitioner_id ?? '') }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" {{ $method === 'put' ? 'readonly' : '' }}>
    </div>

    <div class="mb-4">
        <label for="specialty" class="block text-sm font-medium text-gray-700">Specialty</label>
        <input type="text" name="specialty" id="specialty" value="{{ old('specialty', $practitioner->specialty ?? '') }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
    </div>

    <div class="mb-4">
        <label for="working_hours" class="block text-sm font-medium text-gray-700">Working Hours</label>
        <input type="text" name="working_hours" id="working_hours" value="{{ old('working_hours', $practitioner->working_hours ?? '') }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
    </div>

    <div class="mb-4">
        <label for="user_id" class="block text-sm font-medium text-gray-700">User ID</label>
        <input type="text" name="user_id" id="user_id" value="{{ old('user_id', $practitioner->user_id ?? '') }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" {{ $method === 'put' ? 'readonly' : '' }}>
    </div>

    <button type="submit" class="inline-flex items-center px-4 py-2 bg-gray-200 border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest hover:bg-gray-300">{{ $submitButton }}</button>
</form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>