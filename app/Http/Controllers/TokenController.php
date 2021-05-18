<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class TokenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('token.index', ['tokens' => Auth::user()->tokens]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'token_name' => [
                'required',
                Rule::unique('personal_access_tokens', 'name')->where(function ($query) {
                    return $query->where('tokenable_id', Auth::user()->id);
                })
            ]
        ]);
        $token = $request->user()->createToken($validated['token_name']);
        return view('token.new_token', ['name' => $token->accessToken->name, 'token' => $token->plainTextToken]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $request->user()->tokens()->where('id', $id)->delete();
        return redirect('/token');
    }
}
