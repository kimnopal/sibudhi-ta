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
        Schema::create('advocate_expertise', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("advocate_id");
            $table->unsignedBigInteger("expertise_id");
            $table->foreign("advocate_id")->references("id")->on("advocates");
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
