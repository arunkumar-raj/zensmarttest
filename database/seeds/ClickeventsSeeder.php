<?php

use Illuminate\Database\Seeder;
use App\Clickevents;
use Faker\Generator as Faker;

class ClickeventsSeeder extends Seeder
{
    public function run(Faker $faker)
    {
        for ($i=0; $i < 10; $i++) { 
            Clickevents::create([
                'click_count' => $faker->randomDigitNotNull,
                'clicked_date' => $faker->date($format = 'Y-m-d', $max = 'now')
            ]);
        }
    }
}
