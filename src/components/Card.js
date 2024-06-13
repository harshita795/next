"use client";
import React from 'react'

export default function Card() {
  return (
    <div className='container mb-5 p-5'>
      <div class="row gy-2">
        <div class="col-sm-6 mb-3 mb-sm-4">
          <div class="card hover-card btn btn-light" role='button'>
            <div class="card-body">
              <h5 class="card-title">
                <img src="/people.svg" alt="people" width="40" height="40" className='p-2' />People</h5>
              <p class="card-text">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
              <a href="#" class="btn btn-outline-secondary">Connect</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card hover-card btn btn-success">
            <div class="card-body">
              <h5 class="card-title">
                <img src="/place.svg" alt="place" width="40" height="40" className='p-2' />Place</h5>
              <p class="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
              <a href="#" class="btn btn-outline-secondary">Meet up</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-4">
          <div class="card hover-card btn btn-danger">
            <div class="card-body">
              <h5 class="card-title">
                <img src="/product.svg" alt="product" width="40" height="40" className='p-2' />Product</h5>
              <p class="card-text">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
              <a href="#" class="btn btn-outline-secondary">Get it</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card hover-card btn btn-info">
            <div class="card-body">
              <h5 class="card-title">
                <img src="/program.svg" alt="program" width="40" height="40" className='p-2' />Program</h5>
              <p class="card-text">Find events, meetups and workshops related to your hobby, workshops related to your hobby.  Register or buy tickets online.</p>
              <a href="#" class="btn btn-outline-secondary">Attend</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
