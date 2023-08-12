import { useState, useEffect } from "react";
// import './index.css';

function Scholarship() {
  const [images, setImages] = useState([]);
  const [newScholarship, setNewScholarship] = useState({
    title: "",
    description: "",
    benefit: "",
    location: "",
    url: "",
  });

  const [filterLocation, setFilterLocation] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    // Fetch data from the local JSON server
    fetch("http://localhost:5000/scholarship")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, [newScholarship]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewScholarship((prevScholarship) => ({
      ...prevScholarship,
      [name]: value,
    }));
  };

  const filteredImages = images.filter((image) => {
    const locationMatch = filterLocation
      ? image.location.toLowerCase() === filterLocation.toLowerCase()
      : true;
    const itemMatch = searchItem
      ? image.title.toLowerCase().includes(searchItem.toLowerCase())
      : true;
    return locationMatch && itemMatch;
  });

  return (
    <div className="image-gallery h-full p-6">
      <div>
        <div className=" flex items-center justify-center mb-7">
          <input
            type="text"
            placeholder="Search by item"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="border-solid border-2 border-blue-700 placeholder-gray-800placeholder-gray-800 rounded-md p-2 w-1/2"
          />
        </div>
        <div className=" max-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between ml-4 mr-4 mt-4 mb-4 overflow-hidden"
            >
              <div className="mt-2">
                <h2 className="text-2xl font-semibold mb-1">{image.title}</h2>
                <p className=" text-lg text-gray-700 mb-2">
                  {image.description}
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{image.benefit}</h2>

                  {/* <h2 className="text-lg text-gray-600">{image.location}</h2> */}
                  <a
                    href={image.url}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Link
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scholarship;
