<?php

namespace App\Controller;

use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Versioned\Versioned;

class AboutUsController extends Controller
{
    private static $allowed_actions = [
        'index'
    ];

    public function index(HTTPRequest $request)
    {
        $aboutUsPage = Versioned::get_by_stage(SiteTree::class, Versioned::LIVE)
            ->filter('URLSegment', 'about-us')
            ->sort('LastEdited', 'DESC')
            ->first();
        if ($aboutUsPage) {
            $response = $aboutUsPage->toMap();
            return HTTPResponse::create(json_encode($response))
                ->addHeader('Content-Type', 'application/json')
                ->setStatusCode(200);
        } else {
            return HTTPResponse::create(json_encode(['error' => 'Page not found']))
                ->addHeader('Content-Type', 'application/json')
                ->setStatusCode(404);
        }
    }
}
