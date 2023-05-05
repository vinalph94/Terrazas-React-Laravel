<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SecurityPermission extends Model
{
    protected $table = 'security_permission';
    protected $primaryKey = 'user_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'user_id',
        'access',
    ];

    protected $attributes = [
        'access' => false,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
