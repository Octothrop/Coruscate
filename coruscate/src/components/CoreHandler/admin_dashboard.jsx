import React from "react";
import { Footer } from "../enter-first/comp";
import Navbar4 from "../Navbar4";

export default function AdminDashboard() {
  return (
    <>
      <Navbar4 />
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
                      <h1 className="text-gradient font-semibold text-6xl whitespace-nowrap">
                      👑 Coruscate. Admin
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
            
          </section>


          <Footer />
        </div>
      </main>
    </>
  );
}
