<?php

namespace App\GraphQL\Types;

use App\Models\Service;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ServiceType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Service',
        'description' => 'Collection of services',
        'model' => Service::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'ID of services'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Name of the services'
            ],
        ];
    }
}
