<x-app-layout>
    <x-slot name="header">
        <h1>Edit Practitioner</h1>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            @include('practitioner.form_practitioner', [
                'titleForm' => 'Edit Practitioner',
                'route' => ['practitioners.update', $practitioner->practitioner_id],
                'method' => 'put',
                'submitButton' => 'Update'
            ])
        </div>
    </div>
</x-app-layout>