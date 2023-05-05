<?php

use App\Http\Controllers\GardenManager\AllEventsController;
use App\Http\Controllers\GardenManager\GardenTimingController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PoolManager\PoolTimingController;
use App\Http\Controllers\Resident\ResidentVehicleMappingController;
use App\Http\Controllers\SecurityManager\SecurityPermissionController;
use App\Http\Controllers\SecurityManager\SecurityPersonController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Visitor\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\SuperAdmin\SuperAdminController;
use Symfony\Component\Translation\MessageCatalogueInterface;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::post('/get_all_messages', [MessageController::class, 'get_all']);
Route::post('/add_message', [MessageController::class, 'insert']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/users/get_all_admins', [UserController::class, 'get_all_admins']);
Route::get('/users/get_all_residents', [UserController::class, 'get_all_residents']);


Route::get('/email/verify/{id}/{hash}', [AuthController::class, 'verifyEmail']);

// Route::get('/get_vehicles.php', [ResidentVehicleMappingController::class, 'getAllMappings']);


Route::post('/add_vehicle.php', [ResidentVehicleMappingController::class, 'createMapping']);
Route::get('/get_vehicles.php/{resident_id}', [ResidentVehicleMappingController::class, 'getAllMappings']);
Route::delete('/delete_vehicle.php/{id}', [ResidentVehicleMappingController::class, 'deleteMapping']);

//garden timing
Route::get('/gardenmanager/Garden_Read.php', [GardenTimingController::class, 'get_all_timings']);
Route::post('/gardenmanager/Garden_Create_Day.php', [GardenTimingController::class, 'create_day']);
Route::post('/gardenmanager/Garden_Update_Time.php', [GardenTimingController::class, 'update']);
Route::get('/gardenmanager/get_all_residents', [GardenTimingController::class, 'get_all_residents']);
Route::post('/gardenmanager/Garden_Delete_Time.php', [GardenTimingController::class, 'delete']);
//pool timing

Route::get('/poolmanager/Pool_Read.php', [PoolTimingController::class, 'get_all_timings']);
Route::post('/poolmanager/Pool_Create_Day.php', [PoolTimingController::class, 'create_day']);
Route::post('/poolmanager/Pool_Update_Time.php', [PoolTimingController::class, 'update']);
Route::post('/poolmanager/Pool_Delete_Time.php', [PoolTimingController::class, 'delete']);
//gardenevent
Route::get('/gardenmanager/Garden_Event_Read.php', [AllEventsController::class, 'get_all']);
Route::post('/gardenmanager/Garden_event_Insert.php', [AllEventsController::class, 'insert']);
Route::post('/gardenmanager/Garden_event_Delete.php', [AllEventsController::class, 'delete']);

//poolevent
Route::get('/poolmanager/Pool_Event_Read.php', [AllEventsController::class, 'get_all']);
Route::post('/poolmanager/Pool_event_Insert.php', [AllEventsController::class, 'insert']);
Route::post('/poolmanager/Pool_event_Delete.php', [AllEventsController::class, 'delete']);
Route::get('/poolmanager/get_all_residents', [PoolTimingController::class, 'get_all_residents']);
//garden request
Route::get('/gardenmanager/Resident_Garden_Fetch.php', [GardenTimingController::class, 'resident_garden_fetch']);
Route::post('/gardenmanager/Resident_Garden_Request.php', [GardenTimingController::class, 'resident_garden_request']);
Route::get('/gardenmanager/Garden_Access_Read.php', [GardenTimingController::class, 'garden_access_read']);
Route::get('/gardenmanager/Garden_Access_Request.php', [GardenTimingController::class, 'garden_access_request']);
Route::post('/gardenmanager/Garden_Access_Accept.php', [GardenTimingController::class, 'garden_access_accept']);
Route::post('/gardenmanager/Garden_Access_Delete.php', [GardenTimingController::class, 'garden_access_delete']);

//pool request


Route::get('/poolmanager/Resident_Pool_Fetch.php', [PoolTimingController::class, 'resident_pool_fetch']);
Route::post('/poolmanager/Resident_Pool_Request.php', [PoolTimingController::class, 'resident_pool_request']);
Route::get('/poolmanager/Pool_Access_Read.php', [PoolTimingController::class, 'pool_access_read']);
Route::get('/poolmanager/Pool_Access_Request.php', [PoolTimingController::class, 'pool_access_request']);
Route::post('/poolmanager/Pool_Access_Accept.php', [PoolTimingController::class, 'pool_access_accept']);
Route::post('/poolmanager/Pool_Access_Delete.php', [PoolTimingController::class, 'pool_access_delete']);
//garden resident

Route::post('/gardenmanager/Resident_Membership_Delete.php', [GardenTimingController::class, 'resident_membership_delete']);
Route::get('/gardenmanager/Garden_Event_Read.php', [AllEventsController::class, 'get_all']);
Route::post('/gardenmanager/Resident_Event_Register.php', [AllEventsController::class, 'resident_event_register']);
Route::get('/gardenmanager/Resident_Event_View.php', [AllEventsController::class, 'resident_event_view']);

//pool resident

Route::post('/poolmanager/Resident_Membership_Delete.php', [PoolTimingController::class, 'resident_membership_delete']);
Route::get('/poolmanager/Pool_Event_Read.php', [AllEventsController::class, 'get_all']);
Route::post('/poolmanager/Resident_Event_Register.php', [AllEventsController::class, 'resident_event_register']);
Route::get('/poolmanager/Resident_Event_View.php', [AllEventsController::class, 'resident_event_view']);

Route::get('/securitymanager/get_resident_permissions', [SecurityPermissionController::class, 'get_all_resident_access']);
Route::post('/securitymanager/update_resident_permissions', [SecurityPermissionController::class, 'update_resident_permissions']);


Route::get('/securityperson/get_all', [SecurityPersonController::class, 'get_all']);
Route::post('/securityperson/update_security_status', [SecurityPersonController::class, 'update_security_status']);
Route::post('/securityperson/delete_security', [SecurityPersonController::class, 'delete_security']);
Route::post('/securityperson/add', [SecurityPersonController::class, 'add']);



Route::post('/visitor/add', [VisitorController::class, 'store']);
Route::get('/visitor/get_all', [VisitorController::class, 'get_all']);
Route::post('/visitor/update_visitor_permissions', [VisitorController::class, 'update_visitor_permissions']);
// poolmanager/Garden_Event_Read.php

// Route::get('/resident-vehicle-mapping/{id}/get', [\App\Http\Controllers\ResidentVehicleMappingController::class, 'getMappingById']);
// Route::put('/resident-vehicle-mapping/{id}', [\App\Http\Controllers\ResidentVehicleMappingController::class, 'updateMapping']);




//superadmin
Route::get('/manager/Manage_Users.php', [SuperAdminController::class, 'get_all']);
Route::post('/manager/Add_Users.php', [SuperAdminController::class, 'insert']);
Route::post('/manager/Delete_Users.php', [SuperAdminController::class, 'delete']);
Route::post('/manager/Update_Users.php', [SuperAdminController::class, 'update']);
