@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-start">

        {{-- نموذج إضافة Role جديد --}}
        <div class="col-md-6">
            <div class="card mb-4">
                <div class="card-header">إضافة دور جديد (Role)</div>
                <div class="card-body">
                    <form action="{{ route('roles.store') }}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="name">اسم الدور</label>
                            <input type="text" name="name" id="name" class="form-control" value="{{ old('name') }}">
                            @if ($errors->has('name'))
                                <span class="text-danger">{{ $errors->first('name') }}</span>
                            @endif
                        </div>

                        <div class="form-group mt-3">
                            <button type="submit" class="btn btn-primary">إضافة</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        {{-- نموذج ربط مستخدم مع Role --}}
        <div class="col-md-6">
            <div class="card mb-4">
                <div class="card-header">ربط مستخدم بدور (User Role)</div>
                <div class="card-body">
                    <form action="{{ route('user_roles.store') }}" method="POST">
                        @csrf

                        <div class="form-group">
                            <label for="user_id">اختر مستخدم</label>
                            <select name="user_id" id="user_id" class="form-control">
                                <option value="" disabled selected>اختر مستخدم</option>
                                @foreach ($users as $id => $user)
                                    <option value="{{ $id }}" {{ old('user_id') == $id ? 'selected' : '' }}>{{ $user }}</option>
                                @endforeach
                            </select>
                            @if ($errors->has('user_id'))
                                <span class="text-danger">{{ $errors->first('user_id') }}</span>
                            @endif
                        </div>

                        <div class="form-group mt-3">
                            <label for="role_id">اختر دور</label>
                            <select name="role_id" id="role_id" class="form-control">
                                <option value="" disabled selected>اختر دور</option>
                                @foreach ($roles as $id => $role)
                                    <option value="{{ $id }}" {{ old('role_id') == $id ? 'selected' : '' }}>{{ $role }}</option>
                                @endforeach
                            </select>
                            @if ($errors->has('role_id'))
                                <span class="text-danger">{{ $errors->first('role_id') }}</span>
                            @endif
                        </div>

                        <div class="form-group mt-3">
                            <button type="submit" class="btn btn-success">ربط</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </div>
</div>
@endsection
