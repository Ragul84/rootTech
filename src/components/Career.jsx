import React from 'react';

const Career = () => {
  return (
    <div id="career" className="bg-white  flex justify-center items-center m-10"> {/* Full screen white background with centered content */}
      <div className="lets  p-6 rounded-lg shadow-xl text-white overflow-hidden relative w-full max-w-4xl"> {/* Limited width container with rounded corners */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Semi-transparent overlay */}
        <div className=" relative z-10 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Let's Discuss</h2>
            <p className="text-purple-300">We'd love to hear from you!</p>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center">
            Contact Us
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Career;
