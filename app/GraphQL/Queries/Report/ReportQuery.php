<?php

namespace App\GraphQL\Queries\Report;

use App\Models\Report;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

class ReportQuery extends Query
{
    protected $attributes = [
        'name' => 'report',
    ];

    public function type(): Type
    {
        return GraphQL::type('Report');
    }

    public function args(): array
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int(),
                'rules' => ['required']
            ]
        ];
    }

    public function resolve($root, $args)
    {
        return Report::find($args['id']);
    }
}
