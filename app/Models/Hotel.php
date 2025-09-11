<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $fillable = ['hotel_name'];

    // Relationship: Hotel has many users
    public function users()
    {
        return $this->hasMany(User::class);
    }
}