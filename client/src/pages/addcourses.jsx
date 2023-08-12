import { useState, useEffect } from "react";


function AddCourse() {
  const [Courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    faculty: "",
    language: "",
    subject:"",
    date:"",
    url: "",
  });

  useEffect(() => {
    // Fetch data from the MongoDB server
    fetch("http://localhost:5000/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching Courses:", error));
  }, [newCourse]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const addCourse = () => {
    // Send a POST request to add a new Course
    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((response) => response.json())
      .then((newCourseData) => {
        // Update the Courses state with the new Course
        setCourses([...Courses, newCourseData]);
        // Clear the input fields
        setNewCourse({
            title: "",
            description: "",
            faculty: "",
            language: "",
            subject:"",
            date:"",
            url: "",
        });
      })
      .catch((error) => console.error("Error adding Course:", error));
  };



  return (
    <div className="image-gallery h-screen justify-center bg-gray-900 p-6">
        <div className="bg-white justify-center rounded-lg shadow-md p-4 flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newCourse.title}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newCourse.description}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="faculty"
            placeholder="Faculty"
            value={newCourse.faculty}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
            <input
            type="text"
            name="language"
            placeholder="Language"
            value={newCourse.language}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
            <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={newCourse.subject}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
            <input
            type="text"
            name="date"
            placeholder="Date"
            value={newCourse.date}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="url"
            placeholder="Course URL"
            value={newCourse.url}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <button
            onClick={addCourse}
            className="bg-green-500 text-white py-2 px-4 rounded-lg text-xl hover:bg-green-600"
          >
            Add Course
          </button>
        </div>
        </div>
  );
}

export default AddCourse;
