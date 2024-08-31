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
            'name' => 'Dedi Subekti, S.H',
            'email' => 'dedisubekti@example.com',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'name' => 'Marlistiyono, S.H',
            'email' => 'marlistiyono@example.com',
            'password' => Hash::make('12345678'),
        ]);

        User::create([
            'name' => 'Vega Wardhani, S.H',
            'email' => 'vegawardhani@example.com',
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
            'domicile' => 'Banyumas',
            'no_handphone' => '081234567890',
            'image' => 'image 2.png',
            'user_id' => 2,
        ]);

        Advocate::create([
            'experience' => 1,
            'university' => 'Universitas Wijaya Kusuma',
            'domicile' => 'Banyumas',
            'no_handphone' => '081234567890',
            'image' => 'image 3.png',
            'user_id' => 3,
        ]);

        Advocate::create([
            'experience' => 1,
            'university' => 'Universitas Wijaya Kusuma',
            'domicile' => 'Banyumas',
            'no_handphone' => '081234567890',
            'image' => 'image 4.png',
            'user_id' => 4,
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

        AdvocateExpertise::create([
            'advocate_id' => 2,
            'expertise_id' => 1,
        ]);

        AdvocateExpertise::create([
            'advocate_id' => 2,
            'expertise_id' => 2,
        ]);

        AdvocateExpertise::create([
            'advocate_id' => 3,
            'expertise_id' => 1,
        ]);

        AdvocateExpertise::create([
            'advocate_id' => 3,
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
            'name' => 'Naufal',
            'email' => 'naufal@gmail.com',
            'no_handphone' => '081234567890',
            'description' => 'lorem ipsum dolor sit amet',
        ]);
    }
}
