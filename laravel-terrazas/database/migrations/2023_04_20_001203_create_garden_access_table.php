<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGardenAccessTable extends Migration
{
    public function up()
    {
        Schema::create('garden_access', function (Blueprint $table) {
            $table->increments('membership_id_r');
            $table->string('name', 20);
            $table->date('join_date');
            $table->string('decision', 10)->default('pending');
            $table->string('resident_type', 10);
            $table->bigInteger('resident_id')->unsigned();
            $table->timestamps();
            $table->foreign('resident_id')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('garden_access');
    }
}