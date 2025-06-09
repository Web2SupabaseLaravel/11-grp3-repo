<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        DB::statement(<<<SQL
            ALTER TABLE appointment_slots
            ADD CONSTRAINT appointment_slots_end_after_start
            CHECK (end_time > start_time)
        SQL);
    }

    public function down()
    {
        DB::statement('ALTER TABLE appointment_slots DROP CONSTRAINT IF EXISTS appointment_slots_end_after_start');
    }
};
