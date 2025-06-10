<!-- resources/views/user_roles/index.blade.php -->
<form action="{{ route('user_roles.store') }}" method="POST">
    @csrf

    <label for="user_id">اختر مستخدم:</label>
    <select id="user_id" name="user_id" required>
        @foreach ($users as $user)
            <option value="{{ $user->id }}">{{ $user->name }}</option>
        @endforeach
    </select>

    <label for="role_id">اختر دور:</label>
    <select id="role_id" name="role_id" required>
        @foreach ($roles as $role)
            <option value="{{ $role->role_id }}">{{ $role->name }}</option>
        @endforeach
    </select>

    <button type="submit">ربط</button>
</form>
