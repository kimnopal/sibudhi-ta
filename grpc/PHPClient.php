<?php

namespace GrpcClientPHP;

require __DIR__ . '/../vendor/autoload.php';
// require '../GPBMetadata/Proto/Report.php';
// require '../Reports/ReportServiceClient.php';
// require '../Reports/CreateReportRequest.php';
// require '../Reports/Report.php';

use Report\ReportsServiceClient;
use Grpc\ChannelCredentials;

class PHPClient
{
    public $client;

    public function __construct()
    {
        $this->client = new ReportsServiceClient(env("GRPC_SERVER"), [
            'credentials' => ChannelCredentials::createInsecure(),
        ]);
    }
}
