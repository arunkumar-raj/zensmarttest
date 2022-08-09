<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clickevents;
use Log;
use Exception;

class ClickeventsController extends Controller
{
    //Get all clicks from Database
    public function Getclicks(){
        try{
            $todayDate = date("Y-m-d");
            //Get all archived data
            $return_clicks['all'] = Clickevents::all();
            $return_clicks['current'] = 0;

            //Check current date and sends count
            $today_clicks = Clickevents::where('clicked_date',$todayDate)->first();
            if(!empty($today_clicks)){
                $return_clicks['current'] = $today_clicks->click_count;
            }

            return response()->json($return_clicks);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    public function Saveclicks(){

    }
}
