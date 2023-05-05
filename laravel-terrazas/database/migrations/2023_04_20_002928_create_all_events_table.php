<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('AllEvent', function (Blueprint $table) {
            $table->increments('event_id');
            $table->string('event_name', 20);
            $table->string('event_Description', 50);
            $table->date('event_date');
            $table->string('place', 10);
            $table->string('image', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('AllEvent');
    }
}
