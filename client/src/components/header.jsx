import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Header() {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-900 text-xl text-white">
      <nav
        className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className=" flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden max-w-screen lg:flex lg:gap-x-12">
          <Link to="/" className=" font-semibold leading-6 text-white">
            Home
          </Link>
          <Link
            to="/forum"
            className=" font-semibold leading-6 text-white"
          >
            Forums
          </Link>
          <Link
            to="/market"
            className=" font-semibold leading-6 text-white"
          >
            Donate/Get Books
          </Link>
          <Link
            to="/scholarship"
            className=" font-semibold leading-6 text-white"
          >
            Scholarship
          </Link>
          <Link
            to="/courses"
            className=" font-semibold leading-6 text-white"
          >
            Courses
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/addscholarship"
                className=" font-semibold leading-6 text-white"
              >
                Add Scholarship
              </Link>
              <Link
                to="/addcourses"
                className=" font-semibold leading-6 text-white"
              >
                Add Courses
              </Link>
            </>
          ) : (
            <> </>
          )}

          <Link
            to="/aboutus"
            className=" font-semibold leading-6 text-white"
          >
            About Us
          </Link>
        </Popover.Group>

        <div className="">
          {isAuthenticated ? (
            <button
              className="mx-1 btn btn-outline-light my-2 my-sm-0"
              type="submit"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <p
              className=" font-semibold leading-6 text-white mx-1 btn btn-outline-light cursor-pointer my-2 my-sm-0"
              type="submit"
              onClick={() => loginWithRedirect()}
            >
              Admin Login
            </p>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
