"use client";
import React from 'react'

export default function AddOwnCard() {
  return (
    <div className='bg-success p-2 text-dark bg-opacity-10'>
      <div className='container p-5'>
        <div class="card w-100">
          <div class="card-body">
            <h5 class="card-title">
              <img src="/addown.svg" alt="add" width="40" height="40" className='p-2' />Add your own</h5>
            <p class="card-text">Add your own
              Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
            </p>
            <a href="#" class="btn btn-outline-secondary">Add new</a>
          </div>
        </div>
      </div>
    </div>
  )
}
