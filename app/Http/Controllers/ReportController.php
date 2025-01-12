<?php

namespace App\Http\Controllers;

use App\Models\Advocate;
use App\Models\Report;
use App\Models\Reporter;
use App\Models\Service;
use App\Models\ServiceType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function store(Request $request)
    {
        if (!Auth::user()) {
            return redirect()->back()->with('error', ['Gagal mengirim laporan', 'Harap login terlebih dahulu']);
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
            return redirect()->back()->with('error', ['Gagal mengirim laporan', 'Harap masukkan data yang sesuai']);
        }

        if ($request['service_type_id']) {
            $serviceType = ServiceType::find($request['service_type_id']);
            if (!$serviceType) {
                return redirect()->back()->with('error', ['Gagal mengirim laporan', 'Harap masukkan data yang sesuai']);
            }
        }

        Report::create($request->all());
        return redirect()->back()->with('success', ['Berhasil mengirim laporan', 'Kami akan segera menghubungi anda!']);
    }

    public function show($id)
    {
        $report = Report::with(['service', 'service_type'])->find($id);
        return Inertia::render('Dashboard/Submission/show', [
            'submission' => $report,
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
        return redirect()->back()->with('success', ['Berhasil memperbarui laporan', 'Laporan anda berhasil diperbarui!']);
    }

    public function destroy(Report $report)
    {
        $report->delete();

        return redirect()->back()->with('success', ['Berhasil menghapus laporan', 'Laporan anda berhasil dihapus!']);
    }
}
