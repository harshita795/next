"use client";
import React from 'react'

export default function Testimonials() {
  return (
    <div>
      <div className='container p-5 mb-3 mt-3'>
        <div class="card w-100 bg-body-secondary">
          <div class="card-body">
            <h5 class="card-title">
              <img src="/quote.svg" alt="add" width="40" height="40" className='p-2' />Testimonials</h5>
            <p class="card-text">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
            </p>
            <div className='row container'>
              <div className='col card mb-5'>
                <img src="/audio.svg" alt="audio" className='card-img text-light w-100 card-img-overlay' />
                <audio controls className='text-light w-75 card-img-overlay m-4'>
                  <source src="/audio.mp3" type="audio/mpeg" />
                </audio>
              </div>
              <div className='col mt-5'>
                <img src="/dancegirl.svg" alt="dancegirl" className='float-end-xl' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
