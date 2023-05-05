<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function get_all(Request $request)
    {
        $incoming_id = $request->input('incoming_id');
        $outgoing_id = $request->input('outgoing_id');
        // $message = $request->input('message');
    
        $messages = Message::where(function($query) use ($incoming_id, $outgoing_id) {
                    $query->where('incoming_msg_id', $incoming_id)
                          ->where('outgoing_msg_id', $outgoing_id);
                    })->orWhere(function($query) use ($incoming_id, $outgoing_id) {
                    $query->where('incoming_msg_id', $outgoing_id)
                          ->where('outgoing_msg_id', $incoming_id);
                    })
                    ->orderBy('id')
                    ->get();
    
        return $messages;
    }
    
    public function create()
    {
        return view('messages.create');
    }

    public function insert(Request $request)
    {
        $message = new Message;
        $message->incoming_msg_id = $request->input('incoming_msg_id');
        $message->outgoing_msg_id = $request->input('outgoing_msg_id');
        $message->msg = $request->input('msg');
        $message->save();
        return $message->id;


    }

    public function show($id)
    {
        $message = Message::findOrFail($id);
        return view('messages.show', compact('message'));
    }

    public function edit($id)
    {
        $message = Message::findOrFail($id);
        return view('messages.edit', compact('message'));
    }

    public function update(Request $request, $id)
    {
        $message = Message::findOrFail($id);
        $message->incoming_msg_id = $request->input('incoming_msg_id');
        $message->outgoing_msg_id = $request->input('outgoing_msg_id');
        $message->msg = $request->input('msg');
        $message->save();

        return redirect()->route('messages.index');
    }

    public function destroy($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();

        return redirect()->route('messages.index');
    }
}