<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Clickevents;
use Faker\Generator as Faker;

$factory->define(Clickevents::class, function (Faker $faker) {
    return [
        'click_count' => $faker->randomDigitNotNull,
        'clicked_date'=>$faker->date('Y-m-d', $max = 'now')
    ];
});
