<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function get_all_admins()
    {
        $users = User::where('role', '!=', 0)->get();
        return $users->toArray();
    }

    public function get_all_residents()
    {
        $users = User::where('role', '==', 0)->get();
        return $users->toArray();
    }


    public function create()
    {
        return view('users.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users|email',
            'password' => 'required',
            'phone' => 'nullable',
            'aptno' => 'nullable',
        ]);

        $user = User::create($validatedData);

        return redirect()->route('users.show', $user->id);
    }

    public function show(User $user)
    {
        return view('users.show', compact('user'));
    }

    public function edit(User $user)
    {
        return view('users.edit', compact('user'));
    }

    public function update(Request $request, User $user)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
            'password' => 'nullable',
            'phone' => 'nullable',
            'aptno' => 'nullable',
        ]);

        $user->update($validatedData);

        return redirect()->route('users.show', $user->id);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index');
    }
}
