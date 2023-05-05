<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    protected $table = 'visitor';
    protected $fillable = [
        'name',
        'phone_number',
        'email',
        'resident_name',
        'apt_number',
        'license_plate',
        'entry_date_time',
        'approve_status'
    ];

    protected $attributes = [
        
        'approve_status' => 'not-approved',
    ];

}
