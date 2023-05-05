<?php

namespace App\Http\Controllers\GardenManager;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AllEventsController extends Controller
{
    public function get_all(Request $request)
    {
        $filter = $request->input('filter', '');

        $rows = DB::table('AllEvent')
                    ->select('*')
                    ->get();

        return response()->json($rows);
    }


    public function insert(Request $request)
    {
        $data = $request->all();

        // Prepare SQL statement to insert data into table
        DB::table('AllEvent')->insert([
            'event_name' => $data['event_name'],
            'event_Description' => $data['event_Description'],
            'event_date' => $data['event_date'],
            'image' => $data['image'],
            'place' => $data['place']
        ]);

        return response()->json(['message' => 'Data inserted successfully'], 200);
    }

    public function delete(Request $request)
    {
        // retrieve data from request
        $id = $request->input('id');

        // delete data from database
        $result = DB::table('AllEvent')->where('event_id', $id)->delete();

        if ($result) {
            return response()->json(['message' => 'Record deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Error'], 500);
        }
    }

    public function resident_event_register(Request $request)
    {
        // retrieve data from POST request
        $data = $request->all();

        // Prepare SQL statement to insert data into table
        $result = DB::table('event_registrations')->insert([
            'event_id' => $data['event_id'],
            'participant_name' => $data['participant_name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'resident_id' => $data['resident_id']
        ]);

        // Return response based on the result of the database operation
        if ($result) {
            return response()->json(['message' => 'Data inserted successfully']);
        } else {
            return response()->json(['error' => 'Error inserting data']);
        }
    }
    public function resident_event_view(Request $request)
    {
        $filter = $request->query('filter', '');

        $rows = DB::table('allevent')
            ->whereIn('event_id', function ($query) use ($filter) {
                $query->select('event_id')
                    ->from('event_registrations')
                    ->where('resident_id', $filter);
            })
            ->get();

        return response()->json($rows);
    }
}
