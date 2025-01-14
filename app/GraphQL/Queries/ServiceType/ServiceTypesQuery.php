<?php

namespace App\GraphQL\Queries\ServiceType;

use App\Models\ServiceType;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

class ServiceTypesQuery extends Query
{
    protected $attributes = [
        'name' => 'service_types',
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('ServiceType'));
    }

    public function resolve($root, $args)
    {
        return ServiceType::all();
    }
}
