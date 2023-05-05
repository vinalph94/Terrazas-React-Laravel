<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentVehicleMapping extends Model
{
    protected $table = 'resident_vehicle_mapping';
    use HasFactory;

    protected $fillable = ['resident_id', 'vehicle_make', 'vehicle_model', 'vehicle_color', 'license_plate_number'];

    public function resident()
    {
        return $this->belongsTo(User::class);
    }
}
