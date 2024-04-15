import React from 'react'
import { Link } from 'react-scroll'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationArrow,
  faMagicWandSparkles,
} from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
  return (
    <div className="banner py-3  rounded-lg bg-black text-white p-4">
      <div className="container  mx-auto text-center flex justify-between items-center ">
        <div className="flex">
          <div className="font-bold">
            {' '}
            ROOT IT <br /> <span className="font-thin">Solutions</span>{' '}
          </div>
        </div>

        <div className="navbar">
          <div className=" hidden navbar-items md:flex px-10 py-2 space-x-8  ">
            <Link
              to="home"
              className="text-zinc-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              to="services"
              className="text-zinc-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              Services
            </Link>
            <Link
              to="about"
              className="text-zinc-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              to="career"
              className="text-zinc-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              Career
            </Link>
            <Link
              to="work"
              className="text-white rounded-full cursor-pointer"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center py-1 px-2 rounded-full bg-purple-500 hover:bg-purple-600">
          <button className=" text-white font-bold py-2 px-4 rounded-full">
            Contact Us
          </button>
          <div className="w-6 ">
            <ArrowCircleRightIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="text-center mx-auto mt-32">
        <h1 className="text-6xl font-bold relative">Our Work</h1>
        <p className="text-zinc-300 mt-4">
          See how we help our clients become the future best versions of
          themselves each and every day.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <button className="bg-blue-500 absolute left-44 top-44 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Dashboard
          </button>
          <FontAwesomeIcon
            className="arrow absolute left-72 text-blue-400 text-xl font-bold top-52 "
            icon={faLocationArrow}
          />
          <Link
            to="services"
            className="text-zinc-300 cursor-pointer"
            smooth={true}
            duration={500}
          >
            <div className="mouse ">
              <div className="scroll"></div>
            </div>
          </Link>

          <button className="bg-green-500 right-44 top-48 absolute hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Software
          </button>
          <FontAwesomeIcon
            className="arrow2 text-green-400 absolute right-72 top-56  text-xl font-bold  "
            icon={faLocationArrow}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
