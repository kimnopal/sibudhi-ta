<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Report>
 */
class ReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $services = [
            [
                "service_id" => 1,
                "service_type_id" => [],
            ],
            [
                "service_id" => 2,
                "service_type_id" => [1, 2, 3, 4, 5, 6],
            ],
            [
                "service_id" => 1,
                "service_type_id" => [],
            ],
        ];

        $randomService = 1;

        return [
            'user_id' => rand(1, 5),
            'service_id' => $services[$randomService]["service_id"],
            'service_type_id' => count($services[$randomService]["service_type_id"]) > 0 ? $services[$randomService]["service_type_id"][rand(0, 5)] : null,
            'name' => fake()->name(),
            'email' => fake()->email(),
            'no_handphone' => fake()->phoneNumber(),
            'description' => fake()->sentence(),
        ];
    }
}
