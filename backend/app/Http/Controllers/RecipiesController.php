<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReciepiesRequest;
use App\Models\Recipies;
use Illuminate\Http\Request;

class RecipiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recipes = Recipies::with('chemicals')->get();

        // Return the recipes as JSON response
        return response()->json($recipes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ReciepiesRequest $request)
    {


        // Create a new recipe
        $recipe = Recipies::create([
            'lot_number' => $request->lotNumber,
            'name' => $request->name,
            'qty' => $request->qty,
            'unit' => $request->unit,
            'weight_per_meter' => $request->weightmeter
        ]);

        // Attach chemicals to the recipe
        $recipe->chemicals()->attach($request->chemicals);

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'Recipe created successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Retrieve the recipe by its ID along with its associated chemicals
        $recipe = Recipies::with('chemicals')->find($id);

        // Check if the recipe exists
        if (!$recipe) {
            return response()->json(['error' => 'Recipe not found'], 404);
        }

        // Return the recipe as JSON response
        return response()->json($recipe);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
