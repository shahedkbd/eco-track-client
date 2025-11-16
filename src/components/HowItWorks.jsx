import React from 'react';

const HowItWorks = () => {
    return (
        <div className='py-15'>
  <h2 className="text-center text-4xl pb-5 poppins font-bold text-[#7a9352] hover:text-[#628727]">
    How It Works
  </h2>

  <div
    className="
      grid 
      grid-cols-3 
      lg:grid-cols-3 
      md:grid-cols-2 
      max-sm:grid-cols-1
      py-3 
      px-20 
      gap-5
    "
  >
    {/* Step 1 */}
    <div className='text-center p-5 space-y-3'>
      <h4 className='bg-[#7a9352] poppins w-fit mx-auto rounded-full p-3 text-white text-4xl font-black hover:bg-[#628727]'>
        1
      </h4>
      <h3 className='text-xl poppins font-bold'>Join a Challenge</h3>
      <p className='roboto'>
        Pick a sustainability challenge that inspires you — from reducing plastic use to saving water. Each challenge comes with clear goals and easy steps to get started.
      </p>
    </div>

    {/* Step 2 */}
    <div
      className='
        text-center p-5 space-y-3 
        lg:border-l-4 lg:border-r-4 lg:border-gray-700
        md:border-none sm:border-none
      '
    >
      <h4 className='bg-[#7a9352] poppins w-fit mx-auto rounded-full p-3 text-white text-4xl font-black hover:bg-[#628727]'>
        2
      </h4>
      <h3 className='text-xl poppins font-bold'>Track Your Progress</h3>
      <p className='roboto'>
        Monitor your personal and community impact in real time. See how much CO₂ you’ve saved, how many resources you’ve conserved, and how your efforts contribute to the bigger mission.
      </p>
    </div>

    {/* Step 3 */}
    <div className='text-center p-5 space-y-3'>
      <h4 className='bg-[#7a9352] poppins w-fit mx-auto rounded-full p-3 text-white text-4xl font-black hover:bg-[#628727]'>
        3
      </h4>
      <h3 className='text-xl poppins font-bold'>Share and Inspire</h3>
      <p className='roboto'>
        Post your tips, experiences, and achievements to motivate others. Every shared story multiplies awareness and helps more people live sustainably.
      </p>
    </div>
  </div>
</div>

    );
};

export default HowItWorks;