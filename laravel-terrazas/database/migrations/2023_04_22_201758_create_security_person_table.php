<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSecurityPersonTable extends Migration
{
    public function up()
    {
        Schema::create('security_person', function (Blueprint $table) {
            $table->id();
            $table->string('location')->default('entrance');
            $table->string('shift_time')->default('9AM-5PM');
            $table->string('name');
            $table->string('active_status', 10)->default('on-duty');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('security_person');
    }
}