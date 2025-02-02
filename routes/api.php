<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReportController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/reports', [ReportController::class, 'index'])->name('report.index');
Route::get('/email', [ReportController::class, 'email'])->name('email');

Route::post('/reports', [ReportController::class, 'store'])->name('report.store');
Route::get('/reports/{report}', [ReportController::class, 'show'])->name('report.show');
Route::put('/reports/{report}', [ReportController::class, 'update'])->name('report.update');
Route::delete('/reports/{report}', [ReportController::class, 'destroy'])->name('report.delete');
