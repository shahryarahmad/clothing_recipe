<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReciepiesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'lotNumber' => 'required|string',
            'name' => 'required|string',
            'qty' => 'required|integer', // Corrected to integer
            'unit' => 'required|integer', // Assuming unit is an integer
            'weightmeter' => 'required', // Assuming weightmeter is a numeric value
            'chemicals' => 'required|array', // Assuming chemicals is an array
            'chemicals.*' => 'exists:chemicals,id', // Assuming chemicals are existing chemical IDs
        ];
        
    }
}
