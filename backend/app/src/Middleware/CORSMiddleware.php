<?php

namespace App\Middleware;

use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Control\Middleware\HTTPMiddleware;

class CORSMiddleware implements HTTPMiddleware
{
    public function process(HTTPRequest $request, callable $delegate)
    {
        $response = $delegate($request);

        if ($response instanceof HTTPResponse) {
            $response->addHeader('Access-Control-Allow-Origin', '*');
            $response->addHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            $response->addHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        }

        // Tratar requisições OPTIONS separadamente
        if ($request->httpMethod() === 'OPTIONS') {
            return $response->setStatusCode(200);
        }

        return $response;
    }
}
