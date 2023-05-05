<?php

namespace App\Http\Controllers\SecurityManager;

use App\Models\SecurityPermission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SecurityPermissionController extends Controller
{

 

    public function get_all_resident_access()
    {
        $securityPermissions = SecurityPermission::join('users', 'users.id', '=', 'security_permission.user_id')
            ->where('users.role', 0)
            ->select('users.name', 'security_permission.access', 'users.id')
            ->get();
        return $securityPermissions->toArray();
    }

    public function create()
    {
        return view('security_permissions.create');
    }

    public function store(Request $request)
    {
        $securityPermission = new SecurityPermission([
            'user_id' => $request->get('user_id'),
            'access' => $request->get('access')
        ]);
        $securityPermission->save();

        return redirect('/security_permissions')->with('success', 'Security permission saved!');
    }

    public function show($id)
    {
        $securityPermission = SecurityPermission::find($id);
        return view('security_permissions.show', compact('securityPermission'));
    }

    public function edit($id)
    {
        $securityPermission = SecurityPermission::find($id);
        return view('security_permissions.edit', compact('securityPermission'));
    }

    public function update_resident_permissions(Request $request)
    {
        $user_id = $day = $request->input('user_id');
        $securityPermission = SecurityPermission::where('user_id', $user_id)->firstOrFail();
        $securityPermission->access = !$securityPermission->access;
        $securityPermission->save();
        echo "DONE";
    }

    public function destroy($id)
    {
        $securityPermission = SecurityPermission::find($id);
        $securityPermission->delete();

        return redirect('/security_permissions')->with('success', 'Security permission deleted!');
    }
}