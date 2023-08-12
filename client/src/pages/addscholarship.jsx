import { useState, useEffect } from "react";
// import './index.css';

function AddScholarship() {
  const [scholarship, setscholarship] = useState([]);
  const [newScholarship, setNewScholarship] = useState({
    title: "",
    description: "",
    benefit: "",
    location: "",
    url: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewScholarship((prevScholarship) => ({
      ...prevScholarship,
      [name]: value,
    }));
  };

  const addScholarship = () => {
    // Send a POST request to add a new Scholarship
    fetch("http://localhost:5000/scholarship", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScholarship),
    })
      .then((response) => response.json())
      .then((newScholarshipData) => {
        // Update the scholarship state with the new Scholarship
        setscholarship([...scholarship, newScholarshipData]);
        // Clear the input fields
        setNewScholarship({
          title: "",
          description: "",
          benefit: "",
          location: "",
          url: "",
        });

      })
      .catch((error) => console.error("Error adding Scholarship:", error));
  };



  return (
    <div className="image-gallery h-screen  bg-gray-900 p-6">
        <div className="bg-white justify-center rounded-lg shadow-md p-4 flex flex-col">
          {/* <h2 className="text-xl font-semibold mb-2"></h2> */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newScholarship.title}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newScholarship.description}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="benefit"
            placeholder="Benefits"
            value={newScholarship.benefit}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newScholarship.location}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="url"
            placeholder="URL-to-ScholarShip"
            value={newScholarship.url}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <button
            onClick={addScholarship}
            className="bg-green-500 text-white py-2 px-4 rounded-lg text-xl hover:bg-green-600"
          >
            Add Scholarship
          </button>
        </div>
      </div>
  );
}
export default AddScholarship;
