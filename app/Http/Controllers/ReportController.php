<?php

namespace App\Http\Controllers;

use App\Models\Advocate;
use App\Models\Report;
use App\Models\Reporter;
use App\Models\Service;
use App\Models\ServiceType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    public function index(): Response
    {
        $startTime = microtime(true);

        $reports = Report::leftJoin('services', 'reports.service_id', 'services.id')
            ->leftJoin('service_types', 'reports.service_type_id', 'service_types.id')
            ->leftJoin('users', 'reports.user_id', 'users.id')
            ->select('reports.*', 'services.name as service_name', 'service_types.name as service_type_name', 'users.name as user_name')
            ->get();

        $endTime = microtime(true);
        $executionTime = $endTime - $startTime;
        $formattedTime = number_format($executionTime, 3, '.', '');

        Log::info('Execution time: ' . $formattedTime . ' seconds');
        Log::info('CPU Util: ' . number_format((float) exec(" grep 'cpu ' /proc/stat | awk '{print ($2+$4)*100/($2+$4+$5)}' "), 2));
        Log::info('Memory Usage: ' . number_format((float) exec(" free | grep Mem | awk '{print $3/$2 * 100.0}' "), 2));

        return Inertia::render('Index', [
            'reports' => $reports,
        ]);
    }

    public function create()
    {
        return Inertia::render('Create', [
            'services' => Service::with('serviceTypes')->get(),
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

        $request['user_id'] = 1;

        $service = Service::find($request['service_id']);
        if (!$service) {
            return redirect()->back()->with('error', ['Gagal mengirim laporan', 'Harap masukkan data yang sesuai']);
        }

        if ($request['service_type_id']) {
            $serviceType = ServiceType::find($request['service_type_id']);
            if (!$serviceType) {
                return redirect()->back()->with('error', ['Gagal mengirim laporan', 'Harap masukkan data yang sesuai']);
            }
        }

        Report::create($request->all());
        return redirect(route('home'));
    }

    public function show($id)
    {
        $report = Report::leftJoin('services', 'reports.service_id', 'services.id')
            ->leftJoin('service_types', 'reports.service_type_id', 'service_types.id')
            ->leftJoin('users', 'reports.user_id', 'users.id')
            ->select('reports.*', 'services.name as service_name', 'service_types.name as service_type_name', 'users.name as user_name')
            ->find($id);
        return Inertia::render('Show', [
            'report' => $report,
        ]);
    }

    public function edit(Report $report)
    {
        return Inertia::render('Edit', [
            'report' => $report,
            'services' => Service::with('serviceTypes')->get(),
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
            return redirect()->back()->with('error', ['Gagal mengirim laporan', 'Harap masukkan data yang sesuai']);
        }

        if ($request['service_type_id']) {
            $serviceType = ServiceType::find($request['service_type_id']);
            if (!$serviceType) {
                return redirect()->back()->with('error', ['Gagal mengirim laporan', 'Harap masukkan data yang sesuai']);
            }
        }

        $report->update($validatedData);
        return redirect(route('home'));
    }

    public function destroy(Report $report)
    {
        $report->delete();

        return redirect()->back()->with('success', ['Berhasil menghapus laporan', 'Laporan anda berhasil dihapus!']);
    }
}
