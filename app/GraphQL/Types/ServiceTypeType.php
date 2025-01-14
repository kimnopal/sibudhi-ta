<?php

namespace App\GraphQL\Types;

use App\Models\ServiceType;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ServiceTypeType extends GraphQLType
{
    protected $attributes = [
        'name' => 'ServiceType',
        'description' => 'Collection of service types',
        'model' => ServiceType::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'ID of service types'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Name of the service types'
            ],
            'service' => [
                'type' => Type::nonNull(GraphQL::type('Service')),
                'description' => 'Service of the service types'
            ],
        ];
    }
}
