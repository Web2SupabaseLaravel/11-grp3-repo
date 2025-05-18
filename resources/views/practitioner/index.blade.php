<x-app-layout>
    <x-slot name="header">
        <h1 class="text-2xl font-bold text-gray-800">Practitioners</h1>
    </x-slot>

    <div class="py-8">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-lg sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    @if (session('success'))
                        <div class="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                            {{ session('success') }}
                        </div>
                    @endif

                    <!-- زر Add New Practitioner -->
                    <div class="mb-6">
                        <a href="{{ route('practitioners.create') }}" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
                            ➕ Add New Practitioner
                        </a>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-300 border border-gray-200">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Practitioner ID</th>
                                    <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Speciality</th>
                                    <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Working Hours</th>
                                    <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">User ID</th>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider min-w-[280px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                @forelse ($practitioner as $item)
                                    <tr class="hover:bg-gray-50 transition duration-150">
                                        <td class="px-4 py-2 whitespace-nowrap text-gray-800 truncate max-w-md">{{ $item->practitioner_id }}</td>
                                        <td class="px-4 py-2 whitespace-nowrap text-gray-800 max-w-xs">{{ $item->speciality ?? 'N/A' }}</td>
                                        <td class="px-4 py-2 whitespace-nowrap text-gray-800 max-w-xs">{{ $item->working_hours }}</td>
                                        <td class="px-4 py-2 whitespace-nowrap text-gray-800 truncate max-w-md">{{ $item->user_id }}</td>
                                        <td class="px-6 py-2 whitespace-nowrap">
                                            <div class="flex flex-col space-y-2">
                                                <!-- View Button -->
                                                <form action="{{ route('practitioners.show', $item->practitioner_id) }}" method="GET" class="inline-block">
                                                    @csrf
                                                    <button type="submit" class="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 w-full">
                                                        👁️ View
                                                    </button>
                                                </form>

                                                <!-- Edit Button -->
                                                <form action="{{ route('practitioners.edit', $item->practitioner_id) }}" method="GET" class="inline-block">
                                                    @csrf
                                                    <button type="submit" class="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200 w-full">
                                                        ✏️ Edit
                                                    </button>
                                                </form>

                                                <!-- Delete Button -->
                                                <form action="{{ route('practitioners.destroy', $item->practitioner_id) }}" method="POST" class="inline-block" onsubmit="return confirm('Are you sure you want to delete Practitioner ID: {{ $item->practitioner_id }}?');">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 w-full">
                                                        🗑️ Delete
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="5" class="px-4 py-4 text-center text-gray-500">No practitioners found.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>