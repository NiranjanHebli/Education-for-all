import Footer from "../components/footer";

export default function Aboutus() {
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
              cy={1012}
              r={1012}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#0c4d02" />
                <stop offset={1} stopColor="#0c4d02" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <div className=" font-bold tracking-tight text-green-700 sm:text-4xl mb-9 ">
              About Us
            </div>
            <h2 className="text-xl tracking-tight text-white sm:text-4xl">
              Making quality education available for all.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We believe that education is a fundamental right, not a privilege.
              We're on a mission to make high-quality education accessible to
              every individual, regardless of their background, location, or
              financial situation. Our commitment to this vision has driven us
              to create a platform that opens the doors to a world of knowledge
              and empowers individuals to reach their full potential.
            </p>

            <h2 className="mt-6 text-lg leading-8 text-gray-300">
              <strong>Why Us?</strong>
            </h2>
            <ol>
              <li className="mt-6 text-lg leading-8 text-gray-300">
                <strong className="mt-6 text-lg leading-8 text-gray-300">
                  Inclusivity:
                </strong>{" "}
                We believe that everyone deserves the chance to learn and grow.
                We're breaking down barriers that have traditionally limited
                access to education. Whether you're a student, a professional, a
                parent, or someone eager to explore new subjects, our platform
                is designed for you.
              </li>
              <li className="mt-6 text-lg leading-8 text-gray-300">
                <strong className="mt-6 text-lg leading-8 text-gray-300">
                  Diverse Learning Pathways:
                </strong>{" "}
                Education is not one-size-fits-all. Our platform offers a wide
                range of courses, from academic subjects to practical skills.
                You can choose the learning path that suits your interests and
                goals, allowing you to tailor your education experience.
              </li>
              <li className="mt-6 text-lg leading-8 text-gray-300">
                <strong className="mt-6 text-lg leading-8 text-gray-300">
                  World-Class Instructors:
                </strong>{" "}
                We've partnered with passionate educators and experts from
                around the world to provide top-notch instruction. Our
                instructors bring real-world experience and deep knowledge to
                every lesson, making your learning journey engaging and
                meaningful.
              </li>
              <li className="mt-6 text-lg leading-8 text-gray-300">
                <strong className="mt-6 text-lg leading-8 text-gray-300">
                  Affordability:
                </strong>{" "}
                We understand the financial challenges many individuals face.
                That's why we're committed to keeping our courses as affordable
                as possible. We offer various pricing options, including free
                courses, to ensure that anyone can access high-quality
                education.
              </li>
            </ol>

            <h3 className="mt-6 text-lg leading-8 text-gray-300">
              What You'll Find on our Platform
            </h3>
            <ul>
              <li className="mt-6 text-lg leading-8 text-gray-300">
                <strong className="mt-6 text-lg leading-8 text-gray-300">
                  Diverse Subjects:
                </strong>{" "}
                Explore a wide range of subjects, from mathematics and science
                to arts and humanities. Our catalog is constantly expanding to
                meet the evolving needs of learners like you.
              </li>
              <li className="mt-6 text-lg leading-8 text-gray-300">
                <strong className="mt-6 text-lg leading-8 text-gray-300">
                  Interactive Learning:
                </strong>{" "}
                Our interactive platform brings the classroom experience to your
                screen. Engage with instructors, participate in discussions, and
                collaborate with fellow learners from across the globe.
              </li>
              <li className="mt-6 text-lg leading-8 text-gray-300">
                <strong className="mt-6 text-lg leading-8 text-gray-300">
                  Community:
                </strong>{" "}
                Join a vibrant community of learners who share your passion for
                education. Connect, learn, and grow together, creating a
                supportive network that extends beyond the virtual classroom.
              </li>
            </ul>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join Us in the Pursuit of Knowledge. Education is the key to
              personal growth, innovation, and social progress. By making
              education available for all, we're not just changing individual
              lives; we're shaping a better future for our communities and the
              world. Join us on this incredible journey of learning, discovery,
              and empowerment. Together, we can make education a reality for
              every individual, no matter who they are or where they come from.
              Start your educational adventure with Education for All today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
