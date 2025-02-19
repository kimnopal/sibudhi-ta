<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Report;

/**
 */
class ReportsServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Report\CreateReportRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateReport(\Report\CreateReportRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/report.ReportsService/CreateReport',
        $argument,
        ['\Report\Report', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Report\GetReportRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetReport(\Report\GetReportRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/report.ReportsService/GetReport',
        $argument,
        ['\Report\Report', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Report\UpdateReportRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateReport(\Report\UpdateReportRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/report.ReportsService/UpdateReport',
        $argument,
        ['\Report\Report', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Report\DeleteReportRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteReport(\Report\DeleteReportRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/report.ReportsService/DeleteReport',
        $argument,
        ['\Report\DeleteReportResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Report\ReportsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ListReports(\Report\ReportsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/report.ReportsService/ListReports',
        $argument,
        ['\Report\ReportsResponse', 'decode'],
        $metadata, $options);
    }

}
