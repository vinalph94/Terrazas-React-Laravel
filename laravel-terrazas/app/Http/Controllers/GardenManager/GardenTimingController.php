<?php

namespace App\Http\Controllers\GardenManager;

use Illuminate\Http\Request;
use App\Models\GardenTiming;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;


class GardenTimingController extends Controller
{
    public function get_all_residents(Request $request)
    {
        // retrieve data from database
        

        $query = "SELECT * FROM garden_access";
        $rows = DB::select($query);

        // return data as JSON
        return response()->json($rows);
    }

    public function get_all_timings()
    {
        $gardenTimings = DB::table('garden_timing')
            ->select('id', 'day', DB::raw("TIME_FORMAT(start_time, '%H:%i') as start_time"), DB::raw("TIME_FORMAT(end_time, '%H:%i') as end_time"))
            ->get();

        if (!$gardenTimings) {
            return response()->json(['message' => 'Error retrieving garden timings'], 500);
        }

        return response()->json($gardenTimings, 200);
    }


    public function create_day(Request $request)
    {
        // retrieve data from request body
        $data = $request->json()->all();

        // insert data into database
        try {
            DB::table('garden_timing')->insert([

                'day' => $data['day'],
                'start_time' => $data['start_time'],
                'end_time' => $data['end_time']
            ]);
            return response()->json(['message' => 'Data inserted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error inserting data: ' . $e->getMessage()], 500);
        }
    }
    public function delete(Request $request)
    {
        // retrieve data from request
        $id = $request->input('id');

        // delete data from database
        $result = DB::table('garden_timing')->where('id', $id)->delete();

        if ($result) {
            return response()->json(['message' => 'Record deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Error'], 500);
        }
    }


    public function update(Request $request)
    {
        // retrieve data from request body
        $day = $request->input('day');
        $start_time = $request->input('start_time');
        $end_time = $request->input('end_time');
        $garden_id = $request->input('garden_id');

        // update database record
        DB::table('garden_timing')
            ->where('id', $garden_id)
            ->update([
                'day' => $day,
                'start_time' => $start_time,
                'end_time' => $end_time
            ]);

        // return response
        return response()->json(['success' => true]);
    }


    public function resident_garden_request(Request $request)
    {
        // retrieve data from POST request
        $data = $request->json()->all();
        $date = now();

        // Prepare SQL statement to insert data into table
        $result = DB::table('garden_access')->insert([
            'name' => $data['name'],
            'join_date' => $date,
            'resident_type' => $data['resident_type'],
            'resident_id' => $data['resident_id']
        ]);

        // Check if data was inserted successfully
        if ($result) {
            return response()->json(['message' => 'Data inserted successfully']);
        } else {
            return response()->json(['message' => 'Error inserting data'], 500);
        }
    }

    public function resident_garden_fetch(Request $request)
    {
        // retrieve data from database
        $filter = $request->input('filter', '');

        $query = "SELECT * FROM garden_access WHERE resident_id = ?";
        $rows = DB::select($query, [$filter]);

        // return data as JSON
        return response()->json($rows);
    }

    public function garden_access_read(Request $request)
    {
        // retrieve data from database
        $filter = $request->input('filter', '');

        $query = "SELECT membership_id_r, name, join_date from garden_Access WHERE (decision='accept'AND resident_type=$filter)";
        $result = DB::select($query);

        // convert data to an associative array
        $rows = [];
        foreach ($result as $row) {
            $rows[] = (array) $row;
        }

        // return data as JSON
        return response()->json($rows);
    }

    public function garden_access_request(Request $request)
    {
        // retrieve data from database
        $filter = $request->input('filter', '');
        $query = "SELECT membership_id_r, name, join_date from garden_Access WHERE (decision='pending'AND resident_type=$filter)";
        $rows = DB::select($query);
        
        // return data as JSON
        return response()->json($rows);
    }

    public function garden_access_accept(Request $request)
    {
        $id = $request->input('id');

        DB::table('garden_Access')
            ->where('membership_id_r', $id)
            ->update(['decision' => 'accept']);

        return response()->json(['success' => true]);
    }


    public function garden_access_delete(Request $request)
    {
        // retrieve data from POST request
        $data = $request->json()->all();
        $id = $data['id'];

        // delete data from database
        $result = DB::table('garden_Access')->where('membership_id_r', '=', $id)->delete();

        if ($result) {
            return response()->json(['message' => 'Record deleted successfully']);
        } else {
            return response()->json(['message' => 'Error'], 500);
        }
    }

    public function resident_membership_delete(Request $request)
    {
        // retrieve data from POST request
        $data = $request->json()->all();
        $id = $data['resident_id'];

        // delete data from database
        $result = DB::table('garden_Access')->where('resident_id', $id)->delete();

        if ($result) {
            return response()->json(['message' => 'Record deleted successfully']);
        } else {
            return response()->json(['message' => 'Error'], 500);
        }
    }
}