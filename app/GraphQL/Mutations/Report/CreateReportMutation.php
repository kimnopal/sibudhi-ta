<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations\Report;

use App\Models\Report;
use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\SelectFields;

class CreateReportMutation extends Mutation
{
    protected $attributes = [
        'name' => 'createReport',
        'description' => 'A mutation'
    ];

    public function type(): Type
    {
        return Type::nonNull(GraphQL::type('Report'));
    }

    public function args(): array
    {
        return [
            "user_id" => [
                "type" => Type::nonNull(Type::int()),
            ],
            "service_id" => [
                "type" => Type::nonNull(Type::int()),
            ],
            "service_type_id" => [
                "type" => Type::int(),
            ],
            "name" => [
                "type" => Type::nonNull(Type::string()),
            ],
            "email" => [
                "type" => Type::nonNull(Type::string()),
            ],
            "no_handphone" => [
                "type" => Type::nonNull(Type::string()),
            ],
            "status" => [
                "type" => Type::string(),
            ],
            "description" => [
                "type" => Type::nonNull(Type::string()),
            ],
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $report = Report::create($args);

        return $report;
    }
}
