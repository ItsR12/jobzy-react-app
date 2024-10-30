import React from "react";
import "../styles/style.css";
import b1 from "../images/b1.png";
import Footer from "../components/footer";

const AppStatus = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* sidebar */}
        <div className="col-2">
          <div className="flex-shrink-0 p-0" style={{ height: "100vh" }}>
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none p-3"
            >
              <img
                src={require("../../src/images/Jobzy.png")}
                alt=""
                width={100}
              />
            </a>
            <ul className="list-unstyled ps-0">
              {/* Home */}
              <a href="/">
                <li className="mb-1" id="menu-hover">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-house me-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                    Home
                  </button>
                </li>
              </a>
              {/* Dashboard */}
              <a href="/userdashboard">
                <li className="mb-1" id="menu-hover">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
                    data-bs-toggle="collapse"
                    data-bs-target="#orders-collapse"
                    aria-expanded="false"
                  >
                    <i class="bi bi-speedometer2 me-3"></i>
                    Dashboard
                  </button>
                </li>
              </a>
              {/* User Management */}
              <a href="/appstatus">
                <li className="mb-1" id="menu-hover">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
                    data-bs-toggle="collapse"
                    data-bs-target="#orders-collapse"
                    aria-expanded="false"
                  >
                    <i class="bi bi-send-arrow-up me-3"></i>
                    Application Status
                  </button>
                </li>
              </a>
              {/* Settings */}
              <li className="mb-1" id="menu-hover">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-medium ms-2"
                  data-bs-toggle="collapse"
                  data-bs-target="#settings-collapse"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-people me-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                  Settings
                </button>
                <div className="collapse" id="settings-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4">
                    <li className="p-1 ms-4">
                      <a
                        href="/usersetting"
                        className="d-inline-flex text-decoration-none rounded"
                        id="grey-text"
                      >
                        General
                      </a>
                    </li>
                    <li className="p-1 ms-4">
                      <a
                        href="#"
                        className="d-inline-flex text-decoration-none rounded"
                        id="grey-text"
                      >
                        Security
                      </a>
                    </li>
                    <li className="p-1 ms-4">
                      <a
                        href="#"
                        className="d-inline-flex text-decoration-none rounded"
                        id="grey-text"
                      >
                        Notification
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="border-top my-3" />

              {/* User */}
              <div className="my-4 px-lg-6 position-relative">
                <div className="dropup w-full">
                  <button
                    className="btn-primary d-flex w-full py-3 ps-3 pe-4 align-items-center bg-tertiary rounded-2 border border-light-subtle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-3">
                      <img
                        alt="..."
                        src={require("../images/AI - Person 1.jpg")}
                        width={40}
                        className="avatar avatar-sm rounded-circle"
                      />{" "}
                    </span>
                    <span className="flex-fill text-start text-sm font-semibold">
                      Rajat B{" "}
                    </span>
                    <span>
                      <i className="bi bi-chevron-expand text-white text-opacity-70" />
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end w-full">
                    <div className="dropdown-header">
                      <span className="d-block text-sm text-muted mb-1">
                        Signed in as
                      </span>{" "}
                      <span className="d-block text-heading font-semibold">
                        Rajat B
                      </span>
                    </div>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-house me-3" />
                      Home{" "}
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-pencil me-3" />
                      Profile{" "}
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear me-3" />
                      Settings
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-box-arrow-left me-3" />
                      Logout
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-3 justify-content-center align-items-center mt-6 d-none">
                  <div>
                    <i className="bi bi-moon-stars me-2 text-warning me-2" />{" "}
                    <span className="text-heading text-sm font-bold">
                      Dark mode
                    </span>
                  </div>
                  <div className="ms-auto">
                    <div className="form-check form-switch me-n2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="switch-dark-mode"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* profile area */}
        <div className="col-10" id="bg">
          <div className="col-lg-9 col-md-8 col-12">
            {/* Card */}
            <div className="card mt-2 border-0">
              {/* Card header */}
              <div className="card-header">
                <h4 className="mb-0 fw-bold">Job Application Status</h4>
              </div>
            </div>

            {/* Joblist */}
            <div className="list-group mt-2">
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <div class="job-circle border">
                  <img
                    src={require("../../src/images/IT - Microsoft icon.png")}
                    alt="twbs"
                    width="32"
                    height="32"
                    class="flex-shrink-0"
                  />
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h3 className="mb-1 fs-6">
                      <a
                        href="../jobs/job-single.html"
                        className="text-inherit"
                      >
                        Software Engineer
                      </a>
                    </h3>
                    <div>
                      <span className="text-secondary small">
                        at <span className="fw-semibold">Microsoft</span>
                      </span>
                    </div>
                  </div>
                  <small className="text-nowrap">
                    {" "}
                    <i class="bi bi-send me-1"></i>Application Sent
                  </small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <div class="job-circle border">
                  <img
                    src={require("../../src/images/IT - Facebook logo.png")}
                    alt="twbs"
                    width="32"
                    height="32"
                    class="flex-shrink-0"
                  />
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h3 className="mb-1 fs-6">
                      <a
                        href="../jobs/job-single.html"
                        className="text-inherit"
                      >
                        Senior React Developer
                      </a>
                    </h3>
                    <div>
                      <span className="text-secondary small">
                        at <span className="fw-semibold">Facebook</span>
                      </span>
                    </div>
                  </div>
                  <small className="text-nowrap">
                    {" "}
                    <i class="bi bi-eye me-1"></i>Application Viewed
                  </small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <div class="job-circle border">
                  <img
                    src={require("../../src/images/IT - Google icon.png")}
                    alt="twbs"
                    width="32"
                    height="32"
                    class="flex-shrink-0"
                  />
                </div>
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h3 className="mb-1 fs-6">
                      <a
                        href="../jobs/job-single.html"
                        className="text-inherit"
                      >
                        Software Engineer
                      </a>
                    </h3>
                    <div>
                      <span className="text-secondary small">
                        at <span className="fw-semibold">Google</span>
                      </span>
                    </div>
                  </div>
                  <small className="text-nowrap">
                    {" "}
                    <i class="bi bi-person-check-fill me-2"></i>Interviewed
                  </small>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AppStatus;
