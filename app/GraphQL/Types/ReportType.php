<?php

namespace App\GraphQL\Types;

use App\Models\Report;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ReportType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Report',
        'description' => 'Collection of reports',
        'model' => Report::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'ID of reports'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Name of the reports'
            ],
            'email' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Email of the reports'
            ],
            'status' => [
                'type' => Type::string(),
                'description' => 'Status of the reports'
            ],
            'service' => [
                'type' => Type::nonNull(GraphQL::type('Service')),
                'description' => 'Service of reports'
            ],
            'serviceType' => [
                'type' => GraphQL::type('ServiceType'),
                'description' => 'Service Type of reports'
            ],
        ];
    }
}
