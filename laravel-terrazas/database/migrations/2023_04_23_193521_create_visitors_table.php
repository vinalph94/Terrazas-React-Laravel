<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisitorsTable extends Migration
{
    public function up()
    {
        Schema::create('visitor', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone_number');
            $table->string('email');
            $table->string('resident_name');
            $table->string('apt_number');
            $table->string('license_plate');
            $table->dateTime('entry_date_time');
            $table->string('approve_status', 20)->default('not-approved');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('visitor');
    }
}
