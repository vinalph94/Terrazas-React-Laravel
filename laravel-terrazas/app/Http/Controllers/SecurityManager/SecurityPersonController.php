<?php

namespace App\Http\Controllers\SecurityManager;

use App\Models\SecurityPerson;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SecurityPersonController extends Controller
{

    public function add(Request $request)
    {
        $mapping = SecurityPerson::create($request->all());
        return $mapping->id;
    }

    public function get_all()
    {
        $securityPersons = SecurityPerson::all();

        return $securityPersons->toArray();
    }
    public function update_security_status(Request $request)
    {
        $id =  $request->input('id');
        $securityPerson = SecurityPerson::where('id', $id)->firstOrFail();
        if($securityPerson->active_status=="on-duty"){
            $securityPerson->active_status= "off-duty";
        }else{
            $securityPerson->active_status= "on-duty";
        }
        $securityPerson->save();
        echo "DONE";
    }

    public function delete_security(Request $request)
    {
        $id =  $request->input('id');
        $securityPerson = SecurityPerson::find($id);
        $securityPerson->delete();
        echo "DONE";


    }


}
