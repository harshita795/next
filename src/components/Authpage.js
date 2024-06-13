"use client";
import React, { useState } from 'react'



export default function Authpage() {
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
    <div className='bg-light p-2'>
      <div className='container mb-5 p-5'>
        <div className='row'>
          <div className='col-sm-0 col-lg mt-5'>
            <h1><em>Explore your <span className='text-info'>hobby</span> or <span className='text-body-tertiary'>passion</span></em></h1>
            <p class="fw-normal mt-5 mb-3">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
            <p className="fw-normal mb-5">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
            <img src="/hero.svg" className="img-fluid" alt="hero image"></img>
          </div>


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

  )
}

