<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('advokat_expertises', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("advokat_id");
            $table->unsignedBigInteger("expertise_id");
            $table->foreign("advokat_id")->references("id")->on("advokats");
            $table->foreign("expertise_id")->references("id")->on("expertises");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advokat_expertises');
    }
};
