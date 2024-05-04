<?php

namespace App\Traits;

trait ApiResponses{
    protected function ok($message, $data = null, $statusCode = 200){
        return $this->success($message, $data, $statusCode);
    }
    
    protected function success($message, $data = null, $statusCode = 200){
        $responseData = ['message' => $message, 'status' => $statusCode];
        if ($data !== null) {
            $responseData['data'] = $data;
        }
        return response()->json($responseData, $statusCode);
    }
}

?>