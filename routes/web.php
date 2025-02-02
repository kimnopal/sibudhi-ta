<?php

use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ReportController::class, 'index'])->name('home');
Route::get('/email', [ReportController::class, 'email'])->name('email');

Route::get('/reports/create', [ReportController::class, 'create'])->name('report.create');
Route::post('/reports', [ReportController::class, 'store'])->name('report.store');
Route::get('/reports/{report}', [ReportController::class, 'show'])->name('report.show');
Route::get('/reports/{report}/edit', [ReportController::class, 'edit'])->name('report.edit');
Route::put('/reports/{report}', [ReportController::class, 'update'])->name('report.update');
Route::delete('/reports/{report}', [ReportController::class, 'destroy'])->name('report.delete');
