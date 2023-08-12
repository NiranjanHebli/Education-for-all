import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
export default function Home() {
  return (
    <div className=" bg-gray-800">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#47fc56" />
                <stop offset={1} stopColor="#47fc56" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Making "Quality Education" available for all.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We believe that education is a fundamental right, not a privilege.
              We're on a mission to make high-quality education accessible to
              every individual, regardless of their background, location, or
              financial situation. Our commitment to this vision has driven us
              to create a platform that opens the doors to a world of knowledge
              and empowers individuals to reach their full potential.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/forum"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Forums
              </Link>
              <Link
                to="/aboutus"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative w-full lg:mt-8">
            <Carousel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
