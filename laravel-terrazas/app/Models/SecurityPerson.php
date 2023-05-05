<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SecurityPerson extends Model
{
    use HasFactory;

    protected $fillable = [
        'location',
        'name',
        'active_status',
        'shift_time',
    ];

    protected $attributes = [
        'location' => 'entrance',
        'shift_time' => '9AM-5PM',
        'active_status' => 'on-duty',
    ];

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'int';

    protected $table = 'security_person';
}