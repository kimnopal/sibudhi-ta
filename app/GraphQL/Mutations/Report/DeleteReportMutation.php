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

class DeleteReportMutation extends Mutation
{
    protected $attributes = [
        'name' => 'deleteReport',
        'description' => 'A mutation'
    ];

    public function type(): Type
    {
        return Type::boolean();
    }

    public function args(): array
    {
        return [
            "id" => [
                "type" => Type::nonNull(Type::int()),
            ],
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $status = true;
        try {
            $report = Report::findOrFail($args["id"]);
            $report->delete();
        } catch (\Throwable $th) {
            $status = false;
        }

        return $status;
    }
}
