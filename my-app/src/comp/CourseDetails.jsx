// import { useEffect, useState } from "react";

// export default function CourseDetails(){
//     const [course, setCourse ] = useState(null);


//     useEffect(
//         () => {
//             try{
//                 const courseFetch = async () => {
//                 const resp = await fetch(`http://v2.cloudedu.com.au/api/university-course/`);
//                 const data = await resp.json();
//                 setCourse(data)
//                 } 
//             }catch (error){
//                 console.error("Error fetching course info", error)
//             }
//     courseFetch();
//         }, []
//     )
    

//     return (
//         <div>
//             <p>Course ID: {course.id}</p>
//             <p>Course Name: {course.name}</p>
//         </div>
//     )

// }

// The above method doesnt follow the pattern of Suspense, for Suspense to work the comp NEEDS TO THROW A PROMISE
// CourseDetails.jsx - SUSPENSE VERSION
// let course= null;

// export default function CourseDetails() {
//     // If data is already loaded, show it
//     if (course) {
//         return (
//             <div>
//                 <p>Course ID: {course.id}</p>
//                 <p>Course Name: {course.name}</p>
//             </div>
//         );
//     }

//     // If data is loading, throw a promise to trigger Suspense
//     const promise = fetch(`http://v2.cloudedu.com.au/api/university-course/`)
//         .then(resp => resp.json())
//         .then(data => {
//             course = data;
//         });

//     throw promise; // This tells Suspense: "I'm not ready yet"
// }

//the above had cors problem so using mock data
// Data fetching for course details

// CourseDetails Component (uses real API)
let courseDetailsCache = null;

function fetchCourseDetails() {
  if (courseDetailsCache) {
    return courseDetailsCache;
  }

  const promise = new Promise(resolve => {
    setTimeout(() => {
      // Return an ARRAY of courses (matching your component's .map() expectation)
      courseDetailsCache = [
        {
          id: 1,
          course_name: "Web Development Bootcamp",
          category_name: "Programming",
          provider_name: "Code Academy",
          description: "Learn full-stack web development",
          duration: "12 weeks",
          price: "$299"
        },
        {
          id: 2,
          course_name: "Data Science Fundamentals",
          category_name: "Data Science",
          provider_name: "Data School",
          description: "Introduction to data analysis and machine learning",
          duration: "8 weeks",
          price: "$249"
        }
      ];
      resolve();
    }, 2000); // 2 second delay
  });

  throw promise;
}

export default function CourseDetails() {
  const courseData = fetchCourseDetails(); // This will suspend until data is ready
  
  return (
    <div style={{ 
      border: '2px solid #4a90e2', 
      padding: '20px', 
      margin: '20px 0',
      borderRadius: '8px',
      backgroundColor: '#f8fbff'
    }}>
      <h2 style={{ color: '#4a90e2', marginTop: 0 }}>📚 Available Courses ({courseData.length})</h2>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {courseData.map((course, index) => (
          <div key={course.id || index} style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '6px',
            backgroundColor: 'white'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
              {course.course_name || 'Unnamed Course'}
            </h3>
            <div style={{ display: 'grid', gap: '5px', fontSize: '0.9em' }}>
              <p><strong>Category:</strong> {course.category_name || 'N/A'}</p>
              <p><strong>Provider:</strong> {course.provider_name || 'N/A'}</p>
              {course.description && (
                <p><strong>Description:</strong> {course.description}</p>
              )}
              {course.duration && (
                <p><strong>Duration:</strong> {course.duration}</p>
              )}
              {course.price && (
                <p><strong>Price:</strong> {course.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}