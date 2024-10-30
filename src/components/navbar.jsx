import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl p-3">
      <div className="container">
        {/* Logo START */}
        <a className="navbar-brand me-0" href="/">
          <img
            className="dark-mode-item navbar-brand-item"
            src={require("../../src/images/Jobzy.png")}
            width={130}
            alt="logo"
          />
        </a>

        {/* Main navbar START */}
        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
            {/* Nav item */}
            <li className="nav-item dropdown">
              <a className="nav-link text-secondary" href="/">
                Home
              </a>
            </li>
            {/* Nav item */}
            <li className="nav-item dropdown">
              <a className="nav-link text-secondary" href="/joblist">
                Find Job
              </a>
            </li>
            {/* Nav item */}
            <li className="nav-item dropdown">
              <a className="nav-link text-secondary" href="/newjob">
                Post New Job
              </a>
            </li>
            {/* Nav item */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-secondary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact Us
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item text-secondary" href="#">
                    <i class="bi bi-envelope me-1"></i>Email
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-secondary" href="#">
                    <i class="bi bi-whatsapp me-1"></i>WhatsApp
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <ul className="nav align-items-center dropdown-hover ms-sm-2">
          {/* Modal */}
          <button
            type="button"
            class="btn mt-1 btn-white mb-1 btn btn-sm btn-light mb-0 bg-white border me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            <i className="bi bi-person-circle me-1" />
            Sign In
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">
                    Sign In as
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Candidate
                      </label>
                      <li className="nav-item me-2">
                        <a
                          href="/login-candidate"
                          target="_blank"
                          className="btn btn-sm btn-light mb-0 bg-light border"
                        >
                          <i className="bi bi-person-circle me-1 mb-1" />
                          Sign in as Candidate
                        </a>
                      </li>
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Employer
                      </label>
                      <li className="nav-item me-2">
                        <a
                          href="/login-candidate"
                          target="_blank"
                          className="btn btn-sm btn-light mb-0 bg-light border"
                        >
                          <i className="bi bi-person-circle me-1 mb-1" />
                          Sign in as Employer
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary btn btn-sm"
                    id="green-button"
                    data-bs-dismiss="modal"
                  >
                    <i class="bi bi-x me-1"></i>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <li className="nav-item d-none d-sm-block">
            <a href="/signup" target="_blank">
              <button className="btn btn-sm btn-primary mb-0" id="green-button">
                <i class="bi bi-pencil-square me-1"></i>
                Sign Up
              </button>
            </a>
          </li>

          {/* Responsive navbar toggler */}
          <li className="nav-item">
            <button
              className="navbar-toggler ms-sm-3 p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-animation">
                <span />
                <span />
                <span />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
