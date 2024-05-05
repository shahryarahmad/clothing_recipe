<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChemicalRequest;
use App\Models\Chemicals;
use Illuminate\Http\Request;

class ChemicalsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $chemicals = Chemicals::paginate(10); // Adjust the pagination size as needed
        return response()->json($chemicals);
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
    public function store(ChemicalRequest $request)
    {
        $validatedData = $request->validated();

        // Apply strip_tags and trim to each attribute
        foreach ($validatedData as $key => $value) {
            $validatedData[$key] = strip_tags(trim($value));
        }

        $chemical = Chemicals::create($validatedData);

        return response()->json($chemical, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $chemical = Chemicals::find($id);
        if(!$chemical){
            return response()->json(['message' => 'Chemical not found'],404);
        }
        return response()->json($chemical, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $chemical = Chemicals::find($id);
        return response()->json($chemical, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ChemicalRequest $request, $id)
    {
        // Find the model by ID
        $model = Chemicals::find($id);

        // Check if the model exists
        if (!$model) {
            return response()->json(['error' => 'Chemical not found'], 404);
        }



        // Check if the 'name' attribute exists and is not empty in the request
        // if ($request->has('name')) {
        $model->name = $request->name;
        // }

        // Save the updated model
        $model->save();

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'Chemical updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $chemical = Chemicals::find($id);

        if (!$chemical) {
            return response()->json(['error' => 'Chemical not found'], 404);
        }

        $chemical->delete();

        return response()->json(['message' => 'Chemical deleted successfully']);
    }
}
