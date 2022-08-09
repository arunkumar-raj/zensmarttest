<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
use Tests\TestCase;

class Clickevents extends TestCase
{
    public function testGetclicks()
    {
        $response = $this->get('/get/clicks/count');
        $response->assertStatus(200);
    }

    public function testSaveclicks()
    {
        $response = $this->post('/save/clicks',['no_of_clicks' => '1']);
        $response->assertStatus(200);
    }
    
}
