<?php

namespace App\GraphQL\Queries\Report;

use App\Models\Report;
use GraphQL\Type\Definition\Type;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

class ReportsQuery extends Query
{
    protected $attributes = [
        'name' => 'reports',
    ];

    public function type(): Type
    {
        return Type::nonNull(Type::listOf(GraphQL::type('Report')));
    }

    public function resolve($root, $args)
    {
        $startTime = microtime(true);

        $reports = Report::all();

        $endTime = microtime(true);
        $executionTime = $endTime - $startTime;
        $formattedTime = number_format($executionTime, 3, '.', '');

        Log::channel('tugas_akhir')->info('Execution time: ' . $formattedTime . ' seconds');
        Log::channel('tugas_akhir')->info('CPU Util: ' . number_format((float) exec(" grep 'cpu ' /proc/stat | awk '{print ($2+$4)*100/($2+$4+$5)}' "), 2));
        Log::channel('tugas_akhir')->info('Memory Usage: ' . number_format((float) exec(" free | grep Mem | awk '{print $3/$2 * 100.0}' "), 2));

        return $reports;
    }
}
