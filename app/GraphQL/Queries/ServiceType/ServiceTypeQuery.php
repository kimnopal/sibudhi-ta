<?php

namespace App\GraphQL\Queries\ServiceType;

use App\Models\ServiceType;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

class ServiceTypeQuery extends Query
{
    protected $attributes = [
        'name' => 'service_type',
    ];

    public function type(): Type
    {
        return GraphQL::type('ServiceType');
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
        return ServiceType::findOrFail($args['id']);
    }
}
