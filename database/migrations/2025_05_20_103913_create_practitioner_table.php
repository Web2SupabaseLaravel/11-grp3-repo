<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        
        Schema::create('practitioner', function (Blueprint $table) {
            $table->uuid('practitioner_id')->primary();
            $table->string('specialty')->nullable();
            $table->string('working_hours');
            $table->uuid('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('practitioner');
    }
};