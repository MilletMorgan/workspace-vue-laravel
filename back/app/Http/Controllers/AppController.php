<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AppController extends Controller
{
    /**
     * @return Response
     */
    public function index()
    {
        return new Response();
    }
}
