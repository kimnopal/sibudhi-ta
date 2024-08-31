<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\Service;
use App\Models\ServiceType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/page');
    }

    public function store(Request $request)
    {
        if (!Auth::user()) {
            return redirect()->back()->with('error', 'Harap login terlebih dahulu');
        }

        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'no_handphone' => 'required',
            'service_id' => 'required',
            'service_type_id' => 'nullable',
            'description' => 'required',
            'status' => 'nullable',
        ]);

        $request['user_id'] = Auth::user()->id;

        $service = Service::find($request['service_id']);
        if (!$service) {
            return redirect()->back()->with('error', 'Data tidak valid');
        }

        if ($request['service_type_id']) {
            $serviceType = ServiceType::find($request['service_type_id']);
            if (!$serviceType) {
                return redirect()->back()->with('error', 'Data tidak valid');
            }
        }

        Report::create($request->all());
        return redirect()->back()->with('success', 'Berhasil mengirim laporan');
    }
}
