<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResidentVehicleMappingTable extends Migration
{
    public function up()
    {
        Schema::create('resident_vehicle_mapping', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('resident_id');
            $table->string('vehicle_make');
            $table->string('vehicle_model');
            $table->string('vehicle_color');
            $table->string('license_plate_number', 20);
            $table->timestamps();

            $table->foreign('resident_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('resident_vehicle_mapping');
    }
}
