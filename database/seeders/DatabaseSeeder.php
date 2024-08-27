<?php

namespace Database\Seeders;

use App\Models\Advocate;
use App\Models\AdvocateExpertise;
use App\Models\Expertise;
use App\Models\Reporter;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Naufal',
            'email' => 'naufal@example.com',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'name' => 'Paijo',
            'email' => 'paijo@example.com',
            'password' => Hash::make('12345678'),
        ]);

        Expertise::create([
            'name' => 'Pidana',
        ]);

        Expertise::create([
            'name' => 'Perdata',
        ]);

        Advocate::create([
            'experience' => 1,
            'university' => 'Universitas Jenderal Soedirman',
            'domicile' => 'Purbalingga',
            'user_id' => 2,
        ]);

        AdvocateExpertise::create([
            'advocate_id' => 1,
            'expertise_id' => 1,
        ]);

        AdvocateExpertise::create([
            'advocate_id' => 1,
            'expertise_id' => 2,
        ]);

        Reporter::create([
            'nik' => '1234567812345678',
            'user_id' => 1,
        ]);
    }
}
