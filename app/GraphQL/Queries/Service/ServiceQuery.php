<?php

namespace App\GraphQL\Queries\Service;

use App\Models\Service;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

class ServiceQuery extends Query
{
    protected $attributes = [
        'name' => 'service',
    ];

    public function type(): Type
    {
        return GraphQL::type('Service');
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
        return Service::findOrFail($args['id']);
    }
}
