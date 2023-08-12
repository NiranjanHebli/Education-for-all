import Footer from "../components/footer";

export default function Login() {
  return (
    <div className="bg-gray-900 relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-gray-700 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white ">
          Sign Up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white"
            >
              Name
            </label>
            <input
              type="name"
              placeholder="Name"
              className="block w-full px-4 py-2 mt-2 text-green-900 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="block w-full px-4 py-2 mt-2 text-green-900 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-white"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="block w-full px-4 py-2 mt-2 text-green-900 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="block w-full px-4 py-2 mt-2 text-green-900 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
