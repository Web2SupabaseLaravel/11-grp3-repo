<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // الجدول موجود بالفعل في Supabase، لذا لا ننشئه هنا
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // لا يوجد شيء للتراجع عنه
    }
};