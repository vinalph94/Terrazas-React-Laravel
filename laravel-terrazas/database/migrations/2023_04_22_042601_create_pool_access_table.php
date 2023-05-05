<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePoolAccessTable extends Migration
{
    public function up()
    {
        Schema::create('pool_access', function (Blueprint $table) {
            $table->id('membership_id_r');
            $table->string('name');
            $table->date('join_date');
            $table->string('decision',10)->default('pending');
            $table->string('resident_type');
            $table->unsignedBigInteger('resident_id');
            $table->timestamps();

            $table->foreign('resident_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('pool_access');
    }
}
