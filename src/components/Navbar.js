"use client";
import React, { useState } from 'react';

export default function Navbar() {

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const signInForm = (
    <form>
      <div class="d-grid mb-2">
        <button class="btn btn-google btn-outline-secondary btn-login  fw-bold" type="submit">
          <i class="bi bi-google"></i> Continue with Google
        </button>
      </div>
      <div class="d-grid">
        <button class="btn btn-facebook btn-outline-secondary btn-login  fw-bold" type="submit">
          <i class="bi bi-facebook"></i> Continue with Facebook
        </button>
      </div>
      <hr class="my-4" />
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <div class="input-group">
          <input
            type={showPassword ? "text" : "password"}
            class="form-control"
            placeholder="Password"
          />
          <div class="input-group-append">
            <span class="input-group-text" onClick={toggleShowPassword}>
              <i class={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </span>
          </div>
        </div>
      </div>
      <div className='row'>
        <div class="form-check mb-3 col">
          <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
          <label class="form-check-label text-start" for="rememberPasswordCheck">
            Remember password
          </label>
        </div>
        <a href="#!" class="text-body col text-end">Forgot password?</a>
      </div>
      <div class="d-grid">
        <button class="btn btn-outline-secondary btn-login fw-bold" type="submit">Continue</button>
      </div>
    </form>
  );

  const joinInForm = (
    <form>
      <div class="d-grid mb-2">
        <button class="btn btn-google btn-outline-secondary btn-login  fw-bold" type="submit">
          <i class="bi bi-google"></i> Continue with Google
        </button>
      </div>
      <div class="d-grid">
        <button class="btn btn-facebook btn-outline-secondary btn-login  fw-bold" type="submit">
          <i class="bi bi-facebook"></i> Continue with Facebook
        </button>
      </div>
      <hr class="my-4" />
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <div class="input-group">
          <input
            type={showPassword ? "text" : "password"}
            class="form-control"
            placeholder="Password"
          />
          <div class="input-group-append">
            <span class="input-group-text" onClick={toggleShowPassword}>
              <i class={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </span>
          </div>
        </div>
      </div>
      <div className='row'>
        <div class="form-check mb-3 col">
          <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
          <label class="form-check-label" for="rememberPasswordCheck">
            By continuing, you agree to our <a href="#!" class="text-body text-decoration-none"><strong>Terms of Service</strong></a> and <a href="#!" class="text-body text-decoration-none"><strong>Privacy Policy.</strong></a>
          </label>
        </div>
      </div>
      <div class="d-grid">
        <button class="btn btn-outline-secondary btn-login fw-bold" type="submit">Agree and Continue</button>
      </div>
    </form>
  );

  return (

    <nav class="navbar container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/HobbyCue Logo.svg" />
        </a>
        <div className='d-none d-lg-block'>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-secondary" type="submit">Search</button>
          </form>
        </div>


        <div class="btn-group d-none d-lg-block">
          <button type="button" class="btn btn-outline-none-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Explore
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">People</a></li>
            <li><a class="dropdown-item" href="#">Places</a></li>
            <li><a class="dropdown-item" href="#">Program</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Product</a></li>
          </ul>
        </div>
        <div class="btn-group d-none d-lg-block">
          <button type="button" class="btn btn-outline-none-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Hobbies
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">People</a></li>
            <li><a class="dropdown-item" href="#">Places</a></li>
            <li><a class="dropdown-item" href="#">Program</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Product</a></li>
          </ul>
        </div>
        <i class="bi bi-bookmark-fill text-secondary d-none d-lg-block" role='button'></i>
        <i class="bi bi-search text-secondary d-lg-none" role='button'></i>
        <i class="bi bi-bell-fill text-secondary" role='button'></i>
        <i class="bi bi-cart-fill text-secondary d-none d-lg-block" role='button'></i>
        <button type="button" class="btn d-lg-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="bi bi-layout-text-sidebar text-secondary d-lg-none" role='button' ></i>
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='col-sm-0 col-lg mt-2'>
                  <div class="container">
                    <div class="row">
                      <div class="">
                        <div class="card-body p-4 p-sm-5">
                          <div class="text-center mb-5 fw-light fs-5">
                            <span
                              onClick={() => setIsSignIn(true)}
                              class={`text-secondary pb-2 ${isSignIn ? 'border-bottom border-3 text-dark' : ''}`}
                            >
                              <strong role='button'>Sign In</strong>
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span
                              onClick={() => setIsSignIn(false)}
                              class={`text-secondary pb-2 ${!isSignIn ? 'border-bottom border-3 text-dark' : ''}`}
                            >
                              <strong role='button'>Join In</strong>
                            </span>
                          </div>
                          {isSignIn ? signInForm : joinInForm}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-outline-secondary d-none d-lg-block">Sign in</button>
      </div>
    </nav >
  )
}
