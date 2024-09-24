<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ServiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::middleware('auth')->group(function () {
    Route::delete("/logout", [AuthController::class, 'logout'])->name('logout');

    Route::get('/reports', [ReportController::class, 'index'])->name('report.index');
    Route::post('/reports', [ReportController::class, 'store'])->name('report.store');
    Route::put('/reports/{report}', [ReportController::class, 'update'])->name('report.update');
    Route::delete('/reports/{report}', [ReportController::class, 'destroy'])->name('report.delete');
});

Route::middleware('guest')->group(function () {
    Route::get("/register", [AuthController::class, 'register'])->name('register');
    Route::post("/register", [AuthController::class, 'doRegister'])->name('doRegister');
    Route::get("/login", [AuthController::class, 'login'])->name('login');
    Route::post("/login", [AuthController::class, 'doLogin'])->name('doLogin');
});

Route::get("/services", [ServiceController::class, 'index'])->name('services');
Route::get('/about', [AboutController::class, 'index'])->name('about');

Route::get('/consultation', [ConsultationController::class, 'index'])->name('consultation');
Route::get('/consultation/data', [ConsultationController::class, 'data'])->name('consultation.data');
// require __DIR__ . '/auth.php';
