<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
             'name'=>'required|max:191',
             'email'=>'required|email|max:191|unique:users,email',
             'phone'=>'required',
             'password'=>'required|min:6',

        ]);

        if($validator->fails())
        {
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        }else{
            $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'phone'=>$request->phone,
                'password'=>Hash::make($request->password),
            ]);
            
            $token = $user->createToken($user->email.'_Token')->plainTextToken;

            $user->sendEmailVerificationNotification();

            return response()->json([
               'status'=>200,
               'username'=>$user->name,
               'token'=>$token,
               'message'=>'Registered Successfully. Please verify your email at '.$user->email,
            ]);
        }
    }

    public function verifyEmail(Request $request, $id , $hash)
    {
       //$user = User::where('verification_token', $request->token)->firstOrFail();
       $user = User::findOrFail($id);
        
        if (! hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
          //  return redirect('http://localhost:3000')->with('status', 'Invalid verification link.');

          return redirect('http://localhost:3000/login');
        }

       // if (!$user) {
          //  abort(404);
       // }

        if ($user->hasVerifiedEmail()) {
            //return redirect('http://localhost:3000/login')->with('status', 'Your email address is already verified. Please login.');
            return view('email-verification-fail');
        }else{

        $user->markEmailAsVerified();

        return view('email-verification-success');
       // return redirect('http://localhost:3000/login')->with('status', 'Thank you for verifying your email address. You can now login.');
        //return response()->json(['message' => 'Email verified successfully.']);
        }
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required|max:191',
            'password' => 'required',
        ]);

        if($validator->fails()){

            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);

        }else{
            $user = User::where('email', $request->email)->whereNotNull('email_verified_at')->first();
 
            if (! $user || ! Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid Credentials',
                ]);
            }
            else{
                $token = $user->createToken($user->email.'_Token')->plainTextToken;

                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                    'token'=>$token,
                    'role'=>$user->role,
                    'id'=>$user->id,
                    'email'=>$user->email,
                    'phone'=>$user->phone,
                    'message'=>'Logged In Successfully',
                ]);
            }
        }
    }

    public function logout(){

        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Logged Out Successfully',
        ]);
    }
}
