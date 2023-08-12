import { Link } from "react-router-dom";
function Forum() {
  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex overflow-hidden whitespace-normal items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          ></button>
          <div
            className="hidden w-full h-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex text-xl flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row align-items-center text-center lg:gap-2 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  to="/forum/mathematics"
                  className="block py-2 pl-3 pr-4 text-gray-9000 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Mathematics
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/python"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Python Programming
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/biology"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Biology
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/physics"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Physics
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/chemistry"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Chemistry
                </Link>
              </li>
              <li>
                {/* <Link
                  to="/forum/c"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  C Programming
                </Link> */}
              </li>
              <li>
                <Link
                  to="/forum/hindi"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Hindi
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/english"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  English
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/cpp"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {" "}
                  C++
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/management"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Management
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/economics"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Economics
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/java"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {" "}
                  Java programming
                </Link>
              </li>
              <li>
                <Link
                  to="/forum/communication"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Communication Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className=" p-20 bg-gray-800 h-screen">
        {/* Discussion Threads */}
        <div className="bg-white bg-gray-900shadow-md rounded-lg p-4">
          {/* Single Thread */}
          <div className="border-b border-gray-300 py-4">
            <h2 className="text-lg font-semibold">Thread Title</h2>
            <p className="text-gray-600">Posted by John Doe</p>
            <p className="mt-2">Someones Doubt</p>
          </div>
          {/* Single Thread */}
          <div className="border-b border-gray-300 py-4">
            <h2 className="text-lg font-semibold">Your Thread Title</h2>
            <p className="text-gray-600">Posted by You</p>
            <p className="mt-2">Your response to it!</p>
          </div>
          {/* Add New Thread */}
        </div>
        <div className="mt-9 p-3 bg-white rounded-md justify-center text-center text-3xl">
          Interact with students across the country using forums to solve each
          others doubts!
        </div>
      </div>
    </div>
  );
}

export default Forum;
