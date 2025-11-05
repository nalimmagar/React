import { useState, useEffect } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const res = await fetch("https://api.example.com/courses");
      const data = await res.json();
      setCourses(data);
    }

    fetchCourses();
  }, []); // ✅ empty array = run only once on mount

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
}
