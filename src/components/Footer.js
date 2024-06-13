"use client";
import React from 'react'

export default function Footer() {
  return (
    <div>

      <footer class="bg-body-tertiary">
        <div class="container p-4">
          <section class="">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5><strong>Hobbycue</strong></h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body text-decoration-none text-start" href="#!">About Us</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none text-start" href="#!">Our Services</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none text-start" href="#!">Work with Us</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none text-start" href="#!">FAQ</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none text-start" href="#!">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class=""><strong>How Do I</strong></h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Sign Up</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Add a Listing</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Claim Listing</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Post a Query</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Add a Blog Post</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Other Queries</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class=""><strong>Quick Links</strong></h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Listings</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Blog Posts</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Shop / Store</a>
                  </li>
                  <li>
                    <a class="text-body text-decoration-none" href="#!">Community</a>
                  </li>
                </ul>
              </div>
              <section class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class=""><strong>Social Media</strong></h5>
                <div className='row-col'>
                  <a href="#"> <i class="bi bi-facebook btn btn-facebook btn-outline-secondary btn-login  fw-bold"></i> </a>
                  <a href="#"><i class="bi bi-twitter btn btn-twitter btn-outline-secondary btn-login  fw-bold"></i></a>
                  <a href="#"><i class="bi bi-instagram btn btn-facebook btn-outline-secondary btn-login  fw-bold"></i></a>
                  <a href="#"><i class="bi bi-pinterest btn btn-facebook btn-outline-secondary btn-login  fw-bold"></i></a>
                  <a href="#"><i class="bi bi-google btn btn-facebook btn-outline-secondary btn-login  fw-bold"></i></a>
                  <a href="#"><i class="bi bi-youtube btn btn-facebook btn-outline-secondary btn-login  fw-bold"></i></a>
                  <a href="#"><i class="bi bi-telegram btn btn-facebook btn-outline-secondary btn-login  fw-bold"></i></a>
                </div>
                <form action="">
                  <div class="row">
                    <div class="col-auto">
                      <p class="pt-2">
                        <strong>Invite Friends</strong>
                      </p>
                    </div>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Invite</button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </section>
        </div>

        <div class="text-center p-3 bg-body-secondary">
          © Purple Cues Private Limited
        </div>

      </footer >

    </div >
  )
}
