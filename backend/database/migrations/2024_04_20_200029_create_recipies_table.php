<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('qty');
            $table->integer('unit');
            $table->float('weight_per_meter');
            $table->string('quality');
            $table->text('description');
            $table->text('chemicals');
            $table->text('processing')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipies');
    }
};
