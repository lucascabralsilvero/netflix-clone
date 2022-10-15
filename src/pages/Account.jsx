import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/2d067f08-33c6-41c0-a7ed-5f1a8c007d15/AR-en-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix-backdrop" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold' >My shows</h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account