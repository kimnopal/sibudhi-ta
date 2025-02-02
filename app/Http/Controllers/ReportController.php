<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeMessage;
use App\Models\Advocate;
use App\Models\Report;
use App\Models\Reporter;
use App\Models\Service;
use App\Models\ServiceType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    public function index(): JsonResponse
    {
        $reports = [];

        $advocate = Advocate::where('user_id', Auth::user()->id)->first();
        if ($advocate) {
            $reports = Report::with(['service', 'service_type'])->get();
        } else {
            // $reporter = Reporter::where('user_id', Auth::user()->id)->first();
            $reports = Report::with(['service', 'service_type'])->where('user_id', Auth::user()->id)->get();
        }

        // return Inertia::render('Dashboard/Submission/page', [
        //     'reports' => $reports,
        //     'services' => Service::with('serviceTypes')->get(),
        // ]);

        return response()->json([
            'status' => true,
            'message' => 'List Data Report',
            'data' => $reports,
        ]);
    }

    public function email()
    {
        Mail::to('naufalhakim366@gmail.com')->send(new WelcomeMessage());
        return "DONE BANG";
    }

    public function store(Request $request)
    {
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
            return response()->json([
                'status' => false,
                'message' => "Service tidak tersedia",
                'data' => [],
            ]);
        }

        if ($request['service_type_id']) {
            $serviceType = ServiceType::find($request['service_type_id'])->where('service_id', $request['service_id']);
            if (!$serviceType) {
                return response()->json([
                    'status' => false,
                    'message' => "Service Type tidak tersedia",
                    'data' => [],
                ]);
            }
        }

        $report = Report::create($request->all());
        return response()->json([
            'status' => true,
            'message' => "Berhasil membuat report",
            'data' => $report,
        ])->setStatusCode(201);;
    }

    public function show($id)
    {
        $report = Report::with(['service', 'service_type'])->find($id);
        if (!$report) {
            return response()->json([
                'status' => false,
                'message' => "Report tidak tersedia",
                'data' => [],
            ]);
        }

        return response()->json([
            'status' => true,
            'message' => "Data Report",
            'data' => $report,
        ]);
    }

    public function update(Request $request, Report $report)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'no_handphone' => 'required',
            'service_id' => 'required',
            'service_type_id' => 'nullable',
            'description' => 'required',
            'status' => 'nullable',
        ]);

        $service = Service::find($request['service_id']);
        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => "Service tidak tersedia",
                'data' => [],
            ]);
        }

        if ($request['service_type_id']) {
            $serviceType = ServiceType::where('id', $request['service_type_id'])->where('service_id', $request["service_id"])->first();
            if (!$serviceType) {
                return response()->json([
                    'status' => false,
                    'message' => "Service Type tidak tersedia",
                    'data' => [],
                ]);
            }
        }

        $report->update($validatedData);
        return response()->json([
            'status' => true,
            'message' => "Berhasil mengupdate report",
            'data' => $report,
        ]);
    }

    public function destroy(Report $report)
    {
        $report->delete();

        return response()->json([
            'status' => true,
            'message' => "Berhasil menghapus report",
            'data' => $report,
        ]);
    }
}
