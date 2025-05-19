<!-- @extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-start">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    {{ $title_form }}
                </div>

                <div class="card-body">
                    {!! Form::model($service, ['route' => $route, 'method' => $method]) !!}
                    @csrf

                    <div class="form-group">
                        <label for="my-input">Name</label>
                        {!! Form::text('name', null, ['class'=>'form-control']) !!}
                        <span class="text-helper">{{ $errors->first('name') }}</span>
                    </div>

                    <div class="form-group">    
                        <label for="my-input">Duration</label>
                        {!! Form::text('duration', null, ['class'=>'form-control']) !!}
                        <span class="text-helper">{{ $errors->first('duration') }}</span>
                    </div>

                    <div class="form-group">
                        <label for="my-input">Fee</label>
                        {!! Form::text('fee', null, ['class'=>'form-control']) !!}
                        <span class="text-helper">{{ $errors->first('fee') }}</span>
                    </div>  

                    <div class="form-group">
                        {!! Form::submit($submit_button, ['class'=>'btn btn-primary']) !!}
                        {!! Form::close() !!}
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection -->
