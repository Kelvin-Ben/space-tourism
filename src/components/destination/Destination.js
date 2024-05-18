import React from "react";
import moon from "../../assets/destination/image-moon.webp";
import "./Destination.css";
import {  NavLink } from "react-router-dom";

const Destination = () => {
  return (
    <div
      className="bg-cover bg-center h-screen text-white relative"
      style={{
        backgroundImage: `url(${require("../../assets/destination/background-destination-desktop.jpg")})`,
      }}
    >
      <div className="relative lg:w-[70%] md:w-[90%] md:top-[15%] min-h-80 lg:top-1/4 mx-auto border border-rose-50">
        <h1 className="text-4xl uppercase tracking-widest mb-20 font-barlow border border-rose-950">
          <span className="w-20 inline-block text-gray-400 space-x-1.5 font-bold">
            01
          </span>
          pick your destination
        </h1>
        <article className="lg:w-[90%] lg:mx-auto lg:min-h-[50%] lg:flex lg:flex-row md:w-full items-center justify-between border border-rose-600">
          <div className="lg:w-[50%] lg:justify-normal md:w-full md:flex md:justify-center max-h-[80%] border">
            <img src={moon} alt="destination moon" className="lg:w-[75%] md:w-[40%]" />
          </div>
          <div className="lg:w-[50%] h-full md:w-full md:text-center border border-green-400">
            <ul className="flex gap-14 md:w-full font-barlow uppercase tracking-widest list-none font-normal py-4 text-3xl lg:justify-normal md:justify-center">
              <li>
                <NavLink to="#" className={({ isActive}) => isActive ? 'underline underline-offset-4 decoration-2' : 'text-customGray'}>moon</NavLink>
              </li>
              <li>
                <NavLink href="#" className={({ isActive}) => isActive ? 'underline underline-offset-4 decoration-2' : 'text-customGray'}>mars</NavLink>
              </li>
              <li>
                <NavLink href="#" className={({ isActive}) => isActive ? 'underline underline-offset-4 decoration-2' : 'text-customGray'}>europa</NavLink>
              </li>
              <li>
                <NavLink href="#" className={({ isActive}) => isActive ? 'underline underline-offset-4 decoration-2' : 'text-customGray'}>titan</NavLink>
              </li>
            </ul>
            <h2 className="flex lg:justify-normal font-bellefair uppercase lg:text-5xl md:text-4xl">moon</h2>
            <p className="lg:w-[75%] lg:text-start lg:text-2xl font-barlow mb-10 md:text-3xl text-customGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
              condimentum mattis pellentesque id nibh tortor id aliquet.
              Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
            </p>
            <hr />
            <div className="w-full h-auto lg:justify-normal border border-orange-700 flex items-start gap-20 uppercase text-2xl my-6">
              <div className="flex-1 flex flex-col items-start border">
                <span className="text-xl text-customGray font-medium font-barlow tracking-">avg. distance</span>
                <h3 className="font-bellefair text-4xl">676,328 KM</h3>
              </div>
              <div className="flex-1 border flex flex-col items-start">
                <span className="text-xl text-customGray font-medium font-barlow tracking-widest">est. travel time</span>
                <h3 className="font-bellefair text-4xl">3 days</h3>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Destination;
