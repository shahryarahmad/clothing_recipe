<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chemicals extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description'
    ];
    public function recipes()
    {
        return $this->belongsToMany(Recipies::class);
    }
}
