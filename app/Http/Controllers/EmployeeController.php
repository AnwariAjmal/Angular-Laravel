<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    function showData()
    {
        $emp = DB:: table('employees')->get();
        return response()->json([
            $emp->all()
        ], 200);
    }

    function post(Request $request)
    {
        $employee = Employee::create($request->all());
        return response()->json([
            'id' => $employee->id,
        ], 201);

    }
}
