<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clickevents extends Model
{
    protected $fillable = [
        'click_count',
        'clicked_date'
    ];
}
