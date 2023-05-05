<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PoolTiming extends Model
{
    use HasFactory;

    protected $table = 'pool_timing';

    protected $fillable = [
        'day',
        'start_time',
        'end_time'
    ];
}
