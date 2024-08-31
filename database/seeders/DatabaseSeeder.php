<?php

namespace Database\Seeders;

use App\Models\Advocate;
use App\Models\AdvocateExpertise;
use App\Models\Expertise;
use App\Models\Report;
use App\Models\Reporter;
use App\Models\Service;
use App\Models\ServiceType;
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

        // Pengguna
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

        // Keahlian
        Expertise::create([
            'name' => 'Pidana',
        ]);

        Expertise::create([
            'name' => 'Perdata',
        ]);

        // Advokat
        Advocate::create([
            'experience' => 1,
            'university' => 'Universitas Jenderal Soedirman',
            'domicile' => 'Purbalingga',
            'user_id' => 2,
        ]);

        // Keahlian Advokat
        AdvocateExpertise::create([
            'advocate_id' => 1,
            'expertise_id' => 1,
        ]);

        AdvocateExpertise::create([
            'advocate_id' => 1,
            'expertise_id' => 2,
        ]);

        // Pelapor
        Reporter::create([
            'nik' => '1234567812345678',
            'user_id' => 1,
        ]);

        // Layanan
        Service::create([
            'name' => 'Perkara Perdata/Bisnis'
        ]);

        Service::create([
            'name' => 'Perkara Pidana'
        ]);

        Service::create([
            'name' => 'Perkara Tata Usaha Negara'
        ]);

        // Jenis Layanan
        ServiceType::create([
            'service_id' => 2,
            'name' => 'Pelaporan Pengaduan'
        ]);

        ServiceType::create([
            'service_id' => 2,
            'name' => 'Bantuan Hukum'
        ]);

        ServiceType::create([
            'service_id' => 2,
            'name' => 'Pengajuan Pra Peradilan'
        ]);

        ServiceType::create([
            'service_id' => 2,
            'name' => 'Penyusunan Pembelaan/Pledoi'
        ]);

        ServiceType::create([
            'service_id' => 2,
            'name' => 'Eksepsi'
        ]);

        ServiceType::create([
            'service_id' => 2,
            'name' => 'Pengajuan Upaya Hukum'
        ]);

        // Laporan
        Report::create([
            'user_id' => 1,
            'service_id' => 1,
            'no_handphone' => '081234567890',
            'description' => 'lorem ipsum dolor sit amet',
        ]);
    }
}
