<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventRegistration extends Model
{
    use HasFactory;

    protected $table = 'EventRegistration';
    protected $primaryKey = 'Regid';
    public $timestamps = false;

    protected $fillable = [
        'event_id',
        'participant_name',
        'email',
        'phone',
        'resident_id',
    ];

    public function event()
    {
        return $this->belongsTo(AllEvent::class, 'event_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'resident_id');
    }
}
