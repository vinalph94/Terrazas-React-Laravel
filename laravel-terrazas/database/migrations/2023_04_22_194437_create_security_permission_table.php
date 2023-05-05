<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSecurityPermissionTable extends Migration
{
    public function up()
    {
        Schema::create('security_permission', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->primary();
            $table->boolean('access')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('security_permission');
    }
}
