"use client";
import Image from "next/image";
import React from "react";

import MainButton from "./Button";
export default function Hero() {
  return (
    <div>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="#_"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                AI<span className="text-indigo-600">.</span>
              </span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Blog
              </a>
            </nav>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href="#"
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              Sign up
            </a>
          </div>
        </div>
      </section>

      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Useful Tools to</span>
                  <span className="block text-indigo-600 xl:inline">
                    Help You Build Faster.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to build beautiful websites that convey
                  your message and tell your story.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <MainButton
                    title="Explore Car"
                    type="submit"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <Image
                  src="/images/hero.png"
                  alt="hero image"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
