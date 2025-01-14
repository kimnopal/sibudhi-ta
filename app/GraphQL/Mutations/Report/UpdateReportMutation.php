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

class UpdateReportMutation extends Mutation
{
    protected $attributes = [
        'name' => 'updateReport',
        'description' => 'A mutation'
    ];

    public function type(): Type
    {
        return Type::nonNull(GraphQL::type('Report'));
    }

    public function args(): array
    {
        return [
            "id" => [
                "type" => Type::nonNull(Type::int()),
            ],
            "service_id" => [
                "type" => Type::int(),
            ],
            "service_type_id" => [
                "type" => Type::int(),
            ],
            "name" => [
                "type" => Type::string(),
            ],
            "email" => [
                "type" => Type::string(),
            ],
            "no_handphone" => [
                "type" => Type::string(),
            ],
            "status" => [
                "type" => Type::string(),
            ],
            "description" => [
                "type" => Type::string(),
            ],
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $id = $args["id"];
        unset($args["id"]);
        $report = Report::findOrFail($id);
        $report->update($args);

        return $report;
    }
}
