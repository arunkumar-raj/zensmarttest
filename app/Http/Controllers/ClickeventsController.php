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

    public function Saveclicks(Request $request){
        try{
            $no_of_clicks = $request->post('no_of_clicks');
            $todayDate = date("Y-m-d");
            $check_clicks = Clickevents::where('clicked_date',$todayDate)->get();

            //If empty save new entry else update the previous entry
            if($check_clicks->isEmpty() && $no_of_clicks == 0){
                $click = new Clickevents();
                $click->click_count = 1;
                $click->clicked_date = $todayDate;
                $click->save();
                $return_value = 1;
            }else{
                $click = Clickevents::where('clicked_date',$todayDate)->First();
                $click->click_count = $no_of_clicks + 1;
                $click->update();
                $return_value = $no_of_clicks + 1;
            }
            return response()->json($return_value);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }
}
