<?php

namespace App\Http\Controllers\Resident;

use App\Models\ResidentVehicleMapping;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ResidentVehicleMappingController extends Controller
{
    // CREATE operation
    public function createMapping(Request $request)
    {
        $mapping = ResidentVehicleMapping::create($request->all());
        return $mapping->id;
    }

    // READ operation - Get all mappings
    public function getAllMappings($resident_id)
    {
        $mappings = ResidentVehicleMapping::where('resident_id', $resident_id)->get();
        return $mappings->toArray();
    }

    // READ operation - Get mapping by ID
    public function getMappingById($id)
    {
        $mapping = ResidentVehicleMapping::find($id);
        return $mapping ? $mapping->toArray() : null;
    }

    // UPDATE operation
    public function updateMapping(Request $request, $id)
    {
        $mapping = ResidentVehicleMapping::find($id);
        if (!$mapping) {
            return 0;
        }

        $mapping->fill($request->all());
        $mapping->save();

        return 1;
    }

    // DELETE operation
    public function deleteMapping($id)
    {
        $mapping = ResidentVehicleMapping::find($id);
        if (!$mapping) {
            return 0;
        }

        $mapping->delete();

        return 1;
    }
}