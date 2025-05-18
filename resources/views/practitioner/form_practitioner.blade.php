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

                    <form action="{{ route($route[0], $route[1] ?? []) }}" method="{{ $method }}">
                        @csrf
                        @if ($method == 'put')
                            @method('PUT')
                        @endif

                        <div class="mb-4">
                            <label for="practitioner_id" class="block text-sm font-medium text-gray-700">Practitioner ID</label>
                            <input type="text" name="practitioner_id" id="practitioner_id" value="{{ old('practitioner_id', $practitioner->practitioner_id ?? '') }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                            @error('practitioner_id')
                                <div class="text-red-600 text-sm mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-4">
                            <label for="speciality" class="block text-sm font-medium text-gray-700">Speciality</label>
                            <input type="text" name="speciality" id="speciality" value="{{ old('speciality', $practitioner->speciality ?? '') }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            @error('speciality')
                                <div class="text-red-600 text-sm mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-4">
                            <label for="working_hours" class="block text-sm font-medium text-gray-700">Working Hours</label>
                            <input type="text" name="working_hours" id="working_hours" value="{{ old('working_hours', $practitioner->working_hours ?? '') }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                            @error('working_hours')
                                <div class="text-red-600 text-sm mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-4">
                            <label for="user_id" class="block text-sm font-medium text-gray-700">User ID</label>
                            <input type="text" name="user_id" id="user_id" value="{{ old('user_id', $practitioner->user_id ?? '') }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                            @error('user_id')
                                <div class="text-red-600 text-sm mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {{ $submitButton }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>