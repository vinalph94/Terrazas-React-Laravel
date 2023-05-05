<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PoolAccess extends Model
{
    protected $table = 'pool_access';
    protected $primaryKey = 'membership_id_r';
    protected $fillable = [
        'name',
        'join_date',
        'decision',
        'resident_type',
        'resident_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'resident_id', 'id');
    }
}

?>