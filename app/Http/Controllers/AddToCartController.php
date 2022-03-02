<?php

namespace App\Http\Controllers;

use App\Models\AddToCart;
use Illuminate\Http\Request;
use App\Http\Resources\CartResource;

class AddToCartController extends Controller
{
    public function index()
    {
        $carts = AddToCart::get();

        return CartResource::collection($carts)->toJson();
    }

    public function show($cart)
    {
        $CartResource = AddToCart::find($cart);
        return $CartResource->toJson();
        // return view('react-app', compact('carts'));

    }
}
