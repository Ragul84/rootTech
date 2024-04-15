import React from 'react'
import { MailIcon, PhoneIcon, MapIcon } from '@heroicons/react/solid'
import fourth from './map.png'
import { PaperAirplaneIcon as InstagramIcon } from '@heroicons/react/outline' 
import { AtSymbolIcon as TwitterIcon } from '@heroicons/react/outline'
import { IdentificationIcon as LinkedInIcon } from '@heroicons/react/outline'
import { ThumbUpIcon as FacebookIcon } from '@heroicons/react/outline'

const About = () => {
  return (
    <footer id='about' className="footer bg-zinc-900 text-white p-10">
      <div className="flex justify-between mb-10">
        <div className="ms-10">
          ROOT IT <br /> Solutions
        </div>
        <div>
          {' '}
          <h1 className="ms-2">COMPANY</h1>
          <div className="flex justify-between">
            <li className="me-3 text-xs m-2">
              <a href="">About Us</a>
            </li>
            <li className="me-3 text-xs m-2">
              <a href="">Our Services</a>
            </li>
            <li className="me-3 text-xs m-2">
              <a href="">Career</a>
            </li>
            <li className="me-3 text-xs m-2">
              <a href="">Contact Us</a>
            </li>
            <li className="me-3 text-xs m-2">
              <a href="">Our Work</a>
            </li>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 mx-auto mt-3  p-6 rounded-lg shadow-xl text-white overflow-hidden relative w-full max-w-6xl">
        {' '}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>{' '}
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Hello, <span className="text-sm">We Are RootIt!</span>
            </h2>
            <p className="text-white">
              Our goal is to translate the positive effects from revolutionizing
              how companies engage with their clients & their team.
            </p>
          </div>
          <div class="flex justify-center items-center  p-4">
            <div class="flex rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                class="px-4 ms-2 py-2 w-full text-zinc-300 bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button class="bg-blue-500 px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper mt-10  text-sm flex justify-between">
        <div className="first ms-10">
          <h1 className="text-bold mb-3">REACH US AT</h1>
          <h1 className="text-gray-500 mb-2">
            Email -{' '}
            <span className="underline text-white">support@rootit.com</span>
          </h1>
          <h1 className="text-gray-500 mb-2">
            Call - <span className="underline text-white">1800-202-4849</span>
          </h1>
          <h1 className="text-gray-500 mb-2">
            Mon -{' '}
            <span className="underline text-white">Fri, 9 am to 6 pm</span>
          </h1>
        </div>
        <div className="second me-10">
          <h1 className="font-bold mb-3">HEADQUARTERS</h1>
          <h1 className="text-gray-500 mb-2">H-20, Green Park Avenue</h1>
          <h1 className="text-gray-500 mb-2">Omalur Main Road, Salem</h1>
          <h1 className="font-bold mb-2">Salem, Tamil Nadu IN</h1>
          <h2 className="font-bold text-blue-600">
            Get directions <span></span>{' '}
          </h2>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="end flex justify-between items-center w-full px-4 py-2">
        <div className="first text-sm text-white">
          <h1>@roootit solutions, 2024. All Rights Reserved.</h1>
        </div>

        <div className="second">
          <div className="flex space-x-4 justify-center items-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="h-6 w-6 text-blue-500 hover:text-blue-600" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-6 w-6 text-pink-500 hover:text-pink-600" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="h-6 w-6 text-blue-700 hover:text-blue-800" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="h-6 w-6 text-blue-600 hover:text-blue-700" />
            </a>
          </div>
        </div>

        <div className="third flex space-x-4">
          <a href="#" className="text-sm text-gray-300 hover:text-zinc-400">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-zinc-400">
            Terms & Conditions
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-zinc-400">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  )
}

export default About
