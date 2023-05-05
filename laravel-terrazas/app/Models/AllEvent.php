<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AllEvent extends Model
{
    protected $table = 'AllEvent';
    protected $primaryKey = 'event_id';
    public $timestamps = false;
    protected $fillable = [
        'event_name',
        'event_Description',
        'event_date',
        'place',
        'image'
    ];
}
