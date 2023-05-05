<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('event_registrations', function (Blueprint $table) {
            $table->increments('Regid');
            $table->unsignedInteger('event_id');
            $table->foreign('event_id')->references('event_id')->on('AllEvent');
            $table->string('participant_name');
            $table->string('email');
            $table->string('phone');
            $table->bigInteger('resident_id')->unsigned();
            $table->foreign('resident_id')->references('id')->on('users');
            $table->timestamps();
        });
    }
    



    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_registrations');
    }
};
