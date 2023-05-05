<?php

namespace App\Http\Controllers\Visitor;

use App\Models\Visitor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VisitorController extends Controller
{
    public function get_all()
    {
        $visitors = Visitor::all();
        return $visitors->toArray();
    }


    public function update_visitor_permissions(Request $request)
    {
        $user_id =  $request->input('id');
        $securityPermission = Visitor::where('id', $user_id)->firstOrFail();
        if($securityPermission->approve_status =="not-approved"){
            $securityPermission->approve_status = "approved";
        }else{
            $securityPermission->approve_status = "not-approved";
        }
        
        $securityPermission->save();
        echo "DONE";
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'phone_number' => 'required',
            'email' => 'required|email',
            'resident_name' => 'required',
            'apt_number' => 'required',
            'license_plate' => 'required',
            'entry_date_time' => 'required|date',
        ]);

        Visitor::create($validatedData);

        
    }

    public function show(Visitor $visitor)
    {
        return view('visitors.show', ['visitor' => $visitor]);
    }

    public function edit(Visitor $visitor)
    {
        return view('visitors.edit', ['visitor' => $visitor]);
    }

    public function update(Request $request, Visitor $visitor)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'phone_number' => 'required',
            'email' => 'required|email',
            'resident_name' => 'required',
            'apt_number' => 'required',
            'license_plate' => 'required',
            'entry_date_time' => 'required|date',
        ]);

        $visitor->update($validatedData);

        return redirect()->route('visitors.index')->with('success', 'Visitor updated successfully.');
    }

    public function destroy(Visitor $visitor)
    {
        $visitor->delete();

        return redirect()->route('visitors.index')->with('success', 'Visitor deleted successfully.');
    }
}
