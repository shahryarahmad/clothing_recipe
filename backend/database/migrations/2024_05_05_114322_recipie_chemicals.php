<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RecipieChemicals extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chemicals_recipies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('recipies_id');
            $table->unsignedBigInteger('chemicals_id');


            $table->foreign('recipies_id')->references('id')->on('recipies')->onDelete('cascade');
            $table->foreign('chemicals_id')->references('id')->on('chemicals')->onDelete('cascade');

        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
