<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Index', [
            'reports' => Report::leftJoin('services', 'reports.service_id', 'services.id')
                ->leftJoin('service_types', 'reports.service_type_id', 'service_types.id')
                ->leftJoin('users', 'reports.user_id', 'users.id')
                ->select('reports.*', 'services.name as service_name', 'service_types.name as service_type_name', 'users.name as user_name')
                ->get(),
        ]);
    }
}
