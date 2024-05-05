<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipies extends Model
{
    use HasFactory;
    protected $fillable = [
        'lot_number',
        'name',
        'qty',
        'unit',
        'weight_per_meter',
        'quality',
        'description',
        'processing',
    ];
    public function chemicals()
    {
        return $this->belongsToMany(Chemicals::class);
    }
}
