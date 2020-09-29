<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::paginate(3);

        return CourseResource::collection($courses);
    }

    public function store(Request $request)
    {
        $course = Course::create($request->all());

        return new CourseResource($course);
    }

    public function update(Request $request, Course $course)
    {
        $course->update($request->all());

        return new CourseResource($course);
    }

    public function destroy(Course $course)
    {
        $course->delete();

        return new CourseResource($course);
    }
}
