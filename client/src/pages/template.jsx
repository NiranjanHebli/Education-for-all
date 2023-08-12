import React, { useState ,useEffect } from 'react'
import {Link} from 'react-router-dom'

const template = ({value}) => {
  const [forum, setForum] = useState([]);
  const [newForum, setNewForum] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    console.log(value);
    fetch(`http://localhost:5000/forum/${value}`)
      .then((response) => response.json())
      .then((data) => setForum(data))
      .catch((error) => console.error("Error fetching Forums:", error));
  }, [forum]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewForum((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  
  const addForum = () => {
    // Send a POST request to add a new Forum
    fetch(`http://localhost:5000/forum/${value}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForum),
    })
      .then((response) => response.json())
      .then((newForumData) => {
        setForum([...forum, newForumData]);
        setNewForum({
            title: "",
            description: "",
            name: " ",
        });
      })
      .catch((error) => console.error("Error adding Forum:", error));
  };
  return (
    <>
    <div>
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">

    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
    
    </button>
    <div className="hidden w-full h-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

        <li>
          <Link to="/forum/mathematics" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Mathematics</Link>
        </li>
        <li>
          <Link to="/forum/python" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Python Programming</Link>
        </li>
        <li>
          <Link to="/forum/biology" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Biology</Link>
        </li>
        <li>
          <Link to="/forum/physics" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Physics</Link>
        </li>
        <li>
          <Link to="/forum/chemistry" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chemistry</Link>
        </li>
        <li>
          <Link to="/forum/c" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">C Programming</Link>
        </li>
        <li>
          <Link to="/forum/hindi" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hindi</Link>
        </li>
        <li>
          <Link to="/forum/english" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">English</Link>
        </li>
        <li>
          <Link to="/forum/cpp" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> C++</Link>
        </li>
        <li>
          <Link to="/forum/template" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">template</Link>
        </li>
        <li>
          <Link to="/forum/economics" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Economics</Link>
        </li>
        <li>
          <Link to="/forum/java" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Java programming</Link>
        </li>
        <li>
          <Link to="/forum/communication" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Communication Skills</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
<div className='mt-5'>


            {forum.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
              >
                <div className="border-b border-gray-300 py-4">
            <h2 className="text-lg font-semibold">{image.title}</h2>
            <p className="text-gray-600">Posted by {image.name}</p>
            <p className="mt-2">
             {image.description}
            </p>
          </div>

              </div>
            ))}
    </div>

    </div>

<div className=" pt-5 mt-5">

<h2
              htmlFor="title"
              className="block text-gray-700 font-semibold justify-center text-center"
            >
              Engage your Own Thread!
            </h2>
          </div>
          <div className="bg-white justify-center rounded-lg shadow-md p-4 flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newForum.title}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newForum.description}
            onChange={handleInputChange}
            className="w-full rounded-md p-2 mb-2"
          />
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={newForum.name}
            onChange={handleInputChange}
            className="w-full rounded p-2 mb-2"
          />

          <button
            onClick={addForum}
            className="bg-green-500 text-white py-2 px-4 rounded-lg text-xl hover:bg-green-600"
          >
            Post Thread
          </button>
        </div>
          </>
  )
}

export default template;
