import { useState, useEffect } from "react";

function Products() {
  const [images, setImages] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    url: "",
  });

  const [filterLocation, setFilterLocation] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  const [isProductVisible, setIsProductVisible] = useState(true);

  useEffect(() => {
    // Fetch data from the MongoDB server
    fetch("http://localhost:5000/market")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, [newProduct]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };


  const addProduct = () => {
    // Send a POST request to add a new product
    fetch("http://localhost:5000/market", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((newProductData) => {
        // Update the images state with the new product
        setImages([...images, newProductData]);
        // Clear the input fields
        setNewProduct({
          title: "",
          description: "",
          price: "",
          location: "",
          url: "",
        });
      })
      .catch((error) => console.error("Error adding product:", error));
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

  const toggleAddProductVisibility = () => {
    setIsAddProductVisible(!isAddProductVisible);
    setIsProductVisible(!isProductVisible);
  };

  return (
    <div className="= pt-5 pl-5 pr-5">
      <button
        onClick={toggleAddProductVisibility}
        className="bg-green-500 m-2 text-white py-2 px-4 rounded-lg hover:bg-green-600 fixed bottom-10 right-10 p-4"
      >
        {isAddProductVisible ? "Hide" : "Donate Here"}
      </button>
      {isAddProductVisible && (
        <div className="bg-white justify-center rounded-lg shadow-md p-4 flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newProduct.title}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newProduct.location}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="url"
            placeholder="Image URL"
            value={newProduct.url}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
          <button
            onClick={addProduct}
            className="bg-green-500 text-white py-2 px-4 rounded-lg text-xl hover:bg-green-600"
          >
            Donate Here
          </button>
        </div>
      )}
      {isProductVisible && (
        <div>
          <div className=" flex mt-4 mb-4 space-x-4">
            <input
              type="text"
              placeholder="Filter by location"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className=" placeholder-gray-800 rounded-md p-2 w-1/2"
            />
            <input
              type="text"
              placeholder="Search by item"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className=" placeholder-gray-800 rounded-md p-2 w-1/2"
            />
          </div>
          <div className=" max-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
              >
                <div className="flex justify-center items-center h-48">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-lg font-semibold mb-1">{image.title}</h2>
                  <p className="text-gray-700 mb-2">{image.description}</p>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{image.price}</h2>
                    <h2 className="text-lg text-gray-600">{image.location}</h2>
                  </div>
                </div>
                <button  className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                  Get Book
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
