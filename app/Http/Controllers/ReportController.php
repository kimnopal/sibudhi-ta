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
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    public function index(): JsonResponse
    {
        $startTime = microtime(true);

        $reports = Report::leftJoin('services', 'reports.service_id', 'services.id')
            ->leftJoin('service_types', 'reports.service_type_id', 'service_types.id')
            ->leftJoin('users', 'reports.user_id', 'users.id')
            ->select('reports.*', 'services.name as service_name', 'service_types.name as service_type_name', 'users.name as user_name')
            ->paginate(10);

        $endTime = microtime(true);
        $executionTime = $endTime - $startTime;
        $formattedTime = number_format($executionTime, 3, '.', '');

        Log::channel('tugas_akhir')->info('Execution time: ' . $formattedTime . ' seconds');
        Log::channel('tugas_akhir')->info('CPU Util: ' . number_format((float) exec(" grep 'cpu ' /proc/stat | awk '{print ($2+$4)*100/($2+$4+$5)}' "), 2));
        Log::channel('tugas_akhir')->info('Memory Usage: ' . number_format((float) exec(" free | grep Mem | awk '{print $3/$2 * 100.0}' "), 2));

        return response()->json([
            'status' => true,
            'message' => "Data Report",
            'data' => $reports,
        ]);
    }

    public function email(): JsonResponse
    {
        Mail::to('naufalhakim366@gmail.com')->send(new WelcomeMessage());
        return response()->json([
            'status' => true,
            'message' => "Berhasil mengirim email",
            'data' => [],
        ]);
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
        ])->setStatusCode(201);
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
