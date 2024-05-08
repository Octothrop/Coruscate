import React from "react";
import { Footer } from "../enter-first/comp";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar1";
import { useParams } from "react-router-dom";

export default function Landing() {
  const { userId } = useParams();
  return (
    <>
      <Navbar1 />
      <main>
        <div className="bg-black">
          <div className=" pt-16 flex content-center items-center justify-center min-h-screen-75">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://wallpapercave.com/wp/wp13271083.jpg')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div className="container relative mx-auto mt-56">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <div className="flex items-center justify-center mb-8">
                      <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
                      <h1 className="text-gradient font-semibold text-6xl">
                        Coruscate.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>

          <section className="pt-80 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                    FLC
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white text-justify">
                    Step into the world of innovation and problem-solving with
                    our Programming Club. Whether you're a seasoned coder or
                    just starting your journey, our club offers a vibrant
                    community where you can learn, collaborate, and create
                    cutting-edge software solutions. From coding workshops to
                    hackathons, we provide opportunities to sharpen your skills
                    and unleash your creativity in the ever-evolving field of
                    technology
                  </p>
                  <div className="text-center mt-8">
                    <a
                      href="https://www.finiteloop.co.in/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-white border border-white bg-transparent hover:bg-opacity-25 hover:bg-white py-2 px-4 rounded-md inline-block transition duration-300 ease-in-out"
                    >
                      Explore
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src="https://wallpapercave.com/wp/wp5680276.jpg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    className="max-w-full max-h-full rounded-lg shadow-lg"
                    src="https://wallpapercave.com/wp/wp13697013.jpg"
                  />
                </div>

                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <h3 className="text-3xl font-semibold text-white">YOGA</h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white text-justify">
                      Embark on a journey of self-discovery and holistic
                      well-being with our Yoga Club. Immerse yourself in the
                      ancient practice of yoga, where mind, body, and spirit
                      unite in harmony. Whether you're seeking physical fitness,
                      mental clarity, or spiritual growth, our club offers a
                      sanctuary for relaxation, rejuvenation, and inner peace.
                      Join us for invigorating yoga sessions, mindfulness
                      practices, and community gatherings that nourish the soul
                      and uplift the spirit
                    </p>
                    <Link
                      to="/home_yoga"
                      className="text-white border border-white bg-transparent hover:bg-opacity-25 hover:bg-white py-2 px-4 rounded-md inline-block transition duration-300 ease-in-out"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                    AUTHORCRAFT
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white text-justify">
                    Unlock the power of effective communication and elevate your
                    confidence with our Public Speaking Club. Whether you're a
                    seasoned orator or new to the art of public speaking, our
                    club provides a supportive environment where you can polish
                    your presentation skills, refine your delivery techniques,
                    and conquer the stage with poise and charisma. Join us for
                    engaging workshops, speech contests, and networking events
                    that empower you to articulate your ideas, captivate
                    audiences, and make a lasting impact in both professional
                    and personal spheres
                  </p>
                  <Link
                    to="/home_authorcraft/{userId}"
                    className="text-white border border-white bg-transparent hover:bg-opacity-25 hover:bg-white py-2 px-4 rounded-md inline-block transition duration-300 ease-in-out"
                  >
                    Explore
                  </Link>
                </div>

                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src="https://wallpapercave.com/wp/wp4664600.jpg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pb-20 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1593408995262-1d8933c37afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
                  />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                      <i className="fas fa-rocket text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold text-white">
                      TALEEM
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white text-justify">
                      Enter the realm of imagination and expression with our
                      Drama Club. Dive into the captivating world of theater,
                      where stories come alive through the power of performance.
                      Whether you're an aspiring actor, director, or
                      behind-the-scenes enthusiast, our club welcomes all who
                      share a passion for storytelling. Join us for exhilarating
                      rehearsals, mesmerizing productions, and unforgettable
                      experiences that celebrate the magic of theater
                    </p>
                    <Link
                      to="/home_taleem"
                      className="text-white border border-white bg-transparent hover:bg-opacity-25 hover:bg-white py-2 px-4 rounded-md inline-block transition duration-300 ease-in-out"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
