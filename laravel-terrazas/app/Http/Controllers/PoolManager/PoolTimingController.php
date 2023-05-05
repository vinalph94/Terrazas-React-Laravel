<?php

namespace App\Http\Controllers\PoolManager;

use Illuminate\Http\Request;
use App\Models\PoolTiming;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;


class PoolTimingController extends Controller
{

    public function get_all_residents(Request $request)
    {
        // retrieve data from database
        

        $query = "SELECT * FROM pool_access";
        $rows = DB::select($query);

        // return data as JSON
        return response()->json($rows);
    }
    public function get_all_timings()
    {
        $poolTimings = DB::table('pool_timing')
            ->select('id', 'day', DB::raw("TIME_FORMAT(start_time, '%H:%i') as start_time"), DB::raw("TIME_FORMAT(end_time, '%H:%i') as end_time"))
            ->get();

        if (!$poolTimings) {
            return response()->json(['message' => 'Error retrieving pool timings'], 500);
        }

        return response()->json($poolTimings, 200);
    }


    public function create_day(Request $request)
    {
        // retrieve data from request body
        $data = $request->json()->all();

        // insert data into database
        try {
            DB::table('pool_timing')->insert([

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
        $result = DB::table('pool_timing')->where('id', $id)->delete();

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
        $pool_id = $request->input('pool_id');

        // update database record
        DB::table('pool_timing')
            ->where('id', $pool_id)
            ->update([
                'day' => $day,
                'start_time' => $start_time,
                'end_time' => $end_time
            ]);

        // return response
        return response()->json(['success' => true]);
    }


    public function resident_pool_request(Request $request)
    {
        // retrieve data from POST request
        $data = $request->json()->all();
        $date = now();

        // Prepare SQL statement to insert data into table
        $result = DB::table('pool_access')->insert([
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

    public function resident_pool_fetch(Request $request)
    {
        // retrieve data from database
        $filter = $request->input('filter', '');

        $query = "SELECT * FROM pool_access WHERE resident_id = ?";
        $rows = DB::select($query, [$filter]);

        // return data as JSON
        return response()->json($rows);
    }

    public function pool_access_read(Request $request)
    {
        // retrieve data from database
        $filter = $request->input('filter', '');

        $query = "SELECT membership_id_r, name, join_date from pool_Access WHERE (decision='accept'AND resident_type=$filter)";
        $result = DB::select($query);

        // convert data to an associative array
        $rows = [];
        foreach ($result as $row) {
            $rows[] = (array) $row;
        }

        // return data as JSON
        return response()->json($rows);
    }

    public function pool_access_request(Request $request)
    {
        // retrieve data from database
        $filter = $request->input('filter', '');
        $query = "SELECT membership_id_r, name, join_date from pool_Access WHERE (decision='pending'AND resident_type=$filter)";
        $rows = DB::select($query);
        
        // return data as JSON
        return response()->json($rows);
    }

    public function pool_access_accept(Request $request)
    {
        $id = $request->input('id');

        DB::table('pool_Access')
            ->where('membership_id_r', $id)
            ->update(['decision' => 'accept']);

        return response()->json(['success' => true]);
    }


    public function pool_access_delete(Request $request)
    {
        // retrieve data from POST request
        $data = $request->json()->all();
        $id = $data['id'];

        // delete data from database
        $result = DB::table('pool_Access')->where('membership_id_r', '=', $id)->delete();

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
        $result = DB::table('pool_Access')->where('resident_id', $id)->delete();

        if ($result) {
            return response()->json(['message' => 'Record deleted successfully']);
        } else {
            return response()->json(['message' => 'Error'], 500);
        }
    }
}