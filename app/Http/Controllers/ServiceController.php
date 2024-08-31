<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('Layanan/page', [
            'services' => Service::with('serviceTypes')->get(),
        ]);
    }
}
