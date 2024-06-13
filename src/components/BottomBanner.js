"use client";
import React from 'react'

export default function BottomBanner() {
  return (

    <div className='bg-success p-2 text-dark bg-opacity-10'>
      <div className='container p-5'>
        <h1 className='mb-4'><em>Your <span className='text-body-tertiary '>Hobby,</span> Your <span className='text-info'>Community</span></em></h1>
        <button type="button" class="btn btn-secondary mb-5">Get Started</button>
        <img src="/bottom.svg" className="img-fluid" alt="bottom image"></img>
      </div>
    </div>
  )
}
