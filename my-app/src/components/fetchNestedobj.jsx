import { useState, useEffect } from "react";

export default function CourseDetails() {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch("https://api.example.com/course/1");
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCourse();
  }, []);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>
        Author: {course.author.name} ({course.author.email})
      </p>
      <p>Tags: {course.tags.join(", ")}</p>
    </div>
  );
}
