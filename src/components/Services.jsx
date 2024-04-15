import React from 'react'
import first from './Rectangle0.png'
import second from './Rectangle1.png'
import third from './Rectangle2.png'
import fourth from './Rectangle3.png'

const Services = () => {
  return (
    <div id="services" className="services bg-violet-200 rounded-lg  flex flex-col ">
      {/* First Row */}
      <div className="flex justify-between items-center border-b-2 border-gray-300 px-6 py-4">
        <div className="flex-1 pr-6">
          <h1 className="font-bold text-lg mb-2">Gate Security Control</h1>
          <p className="text-sm text-black font-thin p-2 m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fermentum odio id libero vestibulum, nec pulvinar ipsum interdum.
            Duis ut nisi ac odio ultrices consectetur. Cras nec ultricies
            ligula. Maecenas varius justo ut lacus posuere, at mollis velit
            fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fermentum odio id libero vestibulum, nec pulvinar ipsum interdum.
            Duis ut nisi ac odio ultrices consectetur. Cras nec ultricies
            ligula. Maecenas varius justo ut lacus posuere, at mollis velit
            fermentum.
          </p>
          <div className="flex gap-2 mt-4">
            <button className="bg-violet-400 p-2 rounded-lg">
              License Plate Recognition
            </button>
            <button className="bg-violet-400 p-2 rounded-lg">
              Fully Customization Feature
            </button>
          </div>
        </div>
\        <div className="flex-1">
          <img src={first} alt="Gate Security Control" />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-between items-center border-b-2 border-gray-300 px-6 py-4 flex-row">
        <div className="flex-1 pl-6">
          <img src={second} alt="Canteen Management" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-lg mb-2">Canteen Management</h1>
          <p className="text-sm text-black font-thin p-2 m-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fermentum odio id libero vestibulum, nec pulvinar ipsum interdum.
            Duis ut nisi ac odio ultrices consectetur. Cras nec ultricies
            ligula. Maecenas varius justo ut lacus posuere, at mollis velit
            fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer fermentum odio id libero vestibulum, nec pulvinar ipsum
            interdum. Duis ut nisi ac odio ultrices consectetur. Cras nec
            ultricies ligula. Maecenas varius justo ut lacus posuere, at mollis
            velit fermentum.
          </p>
          <div className="flex gap-2 mt-4">
            <button className="bg-violet-400 p-2 rounded-lg">
              User Friendly UI
            </button>
            <button className="bg-violet-400 p-2 rounded-lg">
              Sustainability Initiatives
            </button>
            <button className="bg-violet-400 p-2 rounded-lg">
              User Freedom
            </button>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="flex justify-between items-center border-b-2 border-gray-300 px-6 py-4">
        <div className="flex-1 pr-6">
          <h1 className="font-bold text-lg mb-2">Hotel Management</h1>
          <p className="text-sm text-black font-thin p-2 m-2">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fermentum odio id libero vestibulum, nec pulvinar ipsum interdum.
            Duis ut nisi ac odio ultrices consectetur. Cras nec ultricies
            ligula. Maecenas varius justo ut lacus posuere, at mollis velit
            fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer fermentum odio id libero vestibulum, nec pulvinar ipsum
            interdum. Duis ut nisi ac odio ultrices consectetur. Cras nec
            ultricies ligula. Maecenas varius justo ut lacus posuere, at mollis
            velit fermentum. Integer fermentum odio id libero vestibulum, nec
            pulvinar ipsum interdum. Duis ut nisi ac odio ultrices consectetur.
          </p>
          <div className="flex gap-2 mt-4">
            <button className="bg-violet-400 p-2 rounded-lg">
              Fully Responsive
            </button>
            <button className="bg-violet-400 p-2 rounded-lg">
              Role Based Control
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={third} alt="Hotel Management" />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="flex justify-between items-center px-6 py-4">

        <div className="flex-1 pl-6">
          <img src={fourth} alt="Quality Control" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-lg mb-2">Quality Control</h1>
          <p
            className="text-sm text-black
          font-thin p-2 m-2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Integer fermentum odio
            id libero vestibulum, nec pulvinar ipsum interdum. Duis ut nisi ac
            odio ultrices consectetur. Cras nec ultricies ligula. Maecenas
            varius justo ut lacus posuere, at mollis velit fermentum. Integer
            fermentum odio id libero vestibulum, nec pulvinar ipsum interdum.
            Cras nec ultricies ligula. Maecenas varius justo ut lacus posuere,
            at mollis velit fermentum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer fermentum odio id libero vestibulum, nec
            pulvinar ipsum interdum. Duis ut nisi ac odio ultrices consectetur.
            Cras nec ultricies ligula. Maecenas varius justo ut lacus posuere,
            at mollis velit fermentum..
          </p>
          <div className="flex gap-2 mt-4">
            <button className="bg-violet-400 p-2 rounded-lg">
              Wastage Monitoring System
            </button>
            <button className="bg-violet-400 p-2 rounded-lg">
              Role Based Control
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
