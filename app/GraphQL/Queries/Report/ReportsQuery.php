<?php

namespace App\GraphQL\Queries\Report;

use App\Models\Report;
use GraphQL\Type\Definition\Type;
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
        return Report::all();
    }
}
