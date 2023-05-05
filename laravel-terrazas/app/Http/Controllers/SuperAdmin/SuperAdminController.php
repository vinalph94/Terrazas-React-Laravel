<?php

namespace App\Http\Controllers\SuperAdmin;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class SuperAdminController extends Controller
{
    
    public function get_all(Request $request)
    {
        

        $rows = DB::table('users')
                    ->select('*')
                    ->get();

        
        return response()->json($rows);
    }

    public function insert(Request $request)
    {
        $data = $request->all();

        // Prepare SQL statement to insert data into table
        $result = DB::table('users')->insert([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'phone' => $data['phone'],
            'role' => $data['role'],
            "email_verified_at" => date(now())
        ]);

        if ($result) {
             return response()->json(['message' => 'Data inserted successfully'], 200);
        } else {
            return response()->json(['message' => 'Error'], 500);
        }
       
    }
    
    public function delete(Request $request)
    {
        // retrieve data from request
        $id = $request->input('id');

        // delete data from database
        $result = DB::table('users')->where('id', $id)->delete();

        if ($result) {
            return response()->json(['message' => 'Record deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Error'], 500);
        }
    }

    public function update(Request $request)
    {   $data = $request->all();
        // retrieve data from request body
        $result = DB::table('users')
        ->where('id', $data['id'])
        ->update([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'aptno' => $data['aptno'],
            'role' => $data['role']
        ]);
            
   

        if ($result) {
             return response()->json(['message' => 'Data updated successfully'], 200);
        } else {
            return response()->json(['message' => 'Error'], 500);
        }

       
    }
}
