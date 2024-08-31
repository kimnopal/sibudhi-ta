<?php

namespace App\Http\Controllers;

use App\Models\Advocate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ConsultationController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Consult/page', [
            'advocates' => Advocate::with('expertises', 'user')->get(),
        ]);
    }

    public function data(Request $request)
    {
        // if ($request->ajax()) {
        $search = $request->query("search");
        // dd($search);

        $advocates = Advocate::with('expertises')->join('users', 'advocates.user_id', 'users.id')->where("users.name", "LIKE", "%$search%")->select('users.*', 'advocates.*')->get();
        return response()->json($advocates);
        // return "ok";
        // }
    }
}
