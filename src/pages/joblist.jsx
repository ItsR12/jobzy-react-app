import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import logo from "../../src/images/Johub crop.png";
import "../styles/style.css";
import ExperienceSlider from "./experienceslider";

const JobList = () => {
  return (
    <div className="containerfluid">
      {/* Navbar */}
      <Navbar />

      {/* Search */}
      <section className="py-8 bg-light" id="joblist-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-12">
              <div>
                <div className="mb-4">
                  {" "}
                  <h2 className=" fw-bold mb-1">
                    Discover Best Places to Work!
                  </h2>
                  <p className="text-secondary">
                    Company jobs, reviews, salaries and interviews
                  </p>
                </div>
                <div className="bg-white rounded-md-pill shadow rounded-3 mb-4">
                  <div className="p-md-2 p-4">
                    <form className="row g-1">
                      <div className="col-md-5 col-sm-12">
                        <div className="input-group">
                          <span
                            className="bg-transparent border-0 pe-0 ps-md-3 ps-md-0 input-group-text"
                            id="searchJob"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              fill="currentColor"
                              className="bi bi-search text-secondary"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                          </span>
                          <input
                            placeholder="Job Title"
                            aria-label="Job Title"
                            aria-describedby="searchJob"
                            type="search"
                            className="rounded-pill border-0 ps-3 form-focus-none form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="input-group">
                          <span
                            className="bg-transparent border-0 pe-0 ps-md-3 ps-md-0 input-group-text"
                            id="location"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-geo-alt  text-secondary"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                          </span>
                          <input
                            placeholder="Search Job"
                            aria-label="Search Job"
                            aria-describedby="location"
                            type="search"
                            className="rounded-pill border-0 ps-3 form-focus-none form-control"
                          />
                        </div>
                      </div>
                      <div className="text-end d-grid col-md-3 col-sm-12">
                        <button
                          type="submit"
                          id="green-button"
                          className="rounded-pill btn btn-primary"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-8 bg-white mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-4">
              <div className="border mb-6 mb-md-0 shadow-none card">
                <div className="card-header">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-filter text-muted me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    All Filters
                  </h6>
                </div>
                <div className="py-3 card-body">
                  <a
                    aria-controls="locations"
                    aria-expanded="true"
                    className="fs-6 text-dark fw-bold"
                    data-bs-toggle="collapse"
                    href="/marketing/jobs/listing/job-list/"
                    id="grey-text"
                  >
                    Locations
                    <span className="float-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </a>
                  <div id="locations" className="collapse show">
                    <div className="mt-3">
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="gujarat-4"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="gujarat-4"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          Gujarat (4)
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="rajasthan-8"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="rajasthan-8"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          Rajasthan (8)
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="delhi-12"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="delhi-12"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          Delhi (12)
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="pune-412"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="pune-412"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          Pune (412)
                        </label>
                      </div>
                      <a
                        className="fw-semi-bold ms-4"
                        href="/marketing/jobs/listing/job-list/"
                        id="green-text"
                      >
                        12+ More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-top py-3 card-body">
                  <a
                    aria-controls="salary"
                    aria-expanded="true"
                    className="fs-6 text-dark fw-bold"
                    data-bs-toggle="collapse"
                    href="/marketing/jobs/listing/job-list/"
                    id="grey-text"
                  >
                    Salary
                    <span className="float-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </a>
                  <div id="salary" className="collapse show">
                    <div className="mt-3">
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="0-3-lakhs"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="0-3-lakhs"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          0-3 Lakhs
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="3-6-lakhs"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="3-6-lakhs"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          3-6 Lakhs
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="6-10-lakhs"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="6-10-lakhs"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          6-10 Lakhs
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="10-15-lakhs"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="10-15-lakhs"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          10-15 Lakhs
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top py-3 card-body">
                  <ExperienceSlider />
                </div>
                <div className="border-top py-3 card-body">
                  <a
                    aria-controls="education"
                    aria-expanded="true"
                    className="fs-6 text-dark fw-bold"
                    data-bs-toggle="collapse"
                    href="/marketing/jobs/listing/job-list/"
                    id="grey-text"
                  >
                    Education
                    <span className="float-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </a>
                  <div id="education" className="collapse show">
                    <div className="mt-3">
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="mtech"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="mtech"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          M.Tech
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="mba--mtech"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="mba--mtech"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          MBA / MTech
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="any-graduate"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="any-graduate"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          Any Graduate
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          type="checkbox"
                          id="post-graduate"
                          className="form-check-input"
                        />
                        <label
                          htmlFor="post-graduate"
                          className="form-check-label text-secondary small fw-medium fs-6"
                        >
                          Post Graduate
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-3 d-grid card-body">
                  <a
                    role="button"
                    tabIndex={0}
                    href="#"
                    className="btn btn-outline-secondary"
                    id="green-button"
                  >
                    Clear Data
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-6 mb-md-0 col-xl-9 col-md-8">
              <div className="align-items-center mb-4 row">
                <div className="col">
                  <p className="mb-0 text-secondary h6">
                    1 - 20 of 86 Software Engineer Jobs in India
                  </p>
                </div>
                <div className="col-auto">
                  <div className="d-flex ">
                    <div
                      className="flex-nowrap btn-group me-2 nav"
                      role="tablist"
                    >
                      <a
                        role="tab"
                        data-rr-ui-event-key="grid"
                        id="react-aria1713998618-:r4:-tab-grid"
                        aria-controls="react-aria1713998618-:r4:-tabpane-grid"
                        aria-selected="false"
                        className="btn btn-outline-secondary btn-icon d-flex align-items-center  "
                        tabIndex={-1}
                        href="#"
                      >
                        <i class="bi bi-grid"></i>
                      </a>
                      <a
                        role="tab"
                        data-rr-ui-event-key="list"
                        id="green-button"
                        aria-controls="react-aria1713998618-:r4:-tabpane-list"
                        aria-selected="true"
                        tabIndex={0}
                        className="btn btn-outline-secondary btn-icon d-flex align-items-center   active"
                        href="#"
                      >
                        <i class="bi bi-list-task"></i>
                      </a>
                    </div>
                    <select name="" className="form-select">
                      <option value="" className="text-muted text-secondary">
                        Newest
                      </option>
                      <option
                        value="oldest"
                        className="text-dark text-secondary"
                      >
                        Oldest
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  id="react-aria1713998618-:r4:-tabpane-list"
                  aria-labelledby="react-aria1713998618-:r4:-tab-list"
                  className="fade pb-4 px-0 react-code tab-pane active show"
                >
                  <div className="card card-bordered border-light-subtle mb-4 card-hover cursor-pointer">
                    {/* card body */}
                    <div className="card-body">
                      <div>
                        <div className="d-md-flex">
                          <div className="mb-3 mb-md-0 p-2">
                            {/* Img */}
                            <div className="job-circle border">
                              <img
                                src={require("../../src/images/IT - Microsoft icon.png")}
                                alt="twbs"
                                width="32"
                                height="32"
                                class="flex-shrink-0"
                              />
                            </div>
                          </div>
                          {/* text */}
                          <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                            <div className="d-flex justify-content-between mb-5">
                              <div>
                                {/* heading */}
                                <h3 className="mb-1 fs-6">
                                  <a
                                    href="../jobs/job-single.html"
                                    className="text-inherit"
                                  >
                                    Software Engineer
                                  </a>
                                  <span
                                    className="badge bg-danger-soft ms-2"
                                    id="green-button"
                                  >
                                    Featured Job
                                  </span>
                                </h3>
                                <div>
                                  <span className="text-secondary small">
                                    at{" "}
                                    <span className="fw-semibold">
                                      Microsoft
                                    </span>
                                  </span>
                                  {/* star */}
                                  <span className="text-dark ms-2 fw-medium small">
                                    4.5
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline ms-1 me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 small text-secondary">
                                    (131 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                {/* Modal */}
                                {/* Modal button */}
                                <button
                                  type="button"
                                  class="btn btn-white mb-1"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal1"
                                  data-bs-whatever="@mdo"
                                >
                                  <i
                                    class="bi bi-send text-secondary"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Apply"
                                  ></i>
                                </button>
                                {/* Modal dialogue */}
                                <div
                                  class="modal fade"
                                  id="exampleModal1"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5 fw-bold"
                                          id="exampleModalLabel"
                                        >
                                          Application Form
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <form>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Name
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Full Name"
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Phone
                                            </label>
                                            <input
                                              type="tel"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Contact Number"
                                            />
                                          </div>
                                          <label
                                            className="form-label"
                                            htmlFor="profileEditState"
                                          >
                                            Resume
                                          </label>
                                          <div class="input-group mb-3">
                                            <input
                                              type="file"
                                              class="form-control"
                                              id="inputGroupFile02"
                                            />
                                            <label
                                              class="input-group-text"
                                              for="inputGroupFile02"
                                            >
                                              Upload
                                            </label>
                                          </div>
                                          <div className="col-12"></div>
                                        </form>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                          id="green-button"
                                        >
                                          <i class="bi bi-send text-white me-2"></i>
                                          Send Application
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <i
                                  class="bi bi-bookmark text-secondary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save"
                                ></i>
                              </div>
                            </div>
                            <div className="d-md-flex justify-content-between">
                              <div className="mb-2 mb-md-0">
                                {/* year */}
                                <span className="me-2">
                                  <i className="bi bi-briefcase small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    1 - 5 years
                                  </span>
                                </span>
                                {/* salary */}
                                <span className="me-2">
                                  <i className="bi bi-currency-dollar small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    12k - 18k
                                  </span>
                                </span>
                                {/* location */}
                                <span className="me-2">
                                  <i className="bi  bi-geo-alt small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Ahmedabad, Gujarat
                                  </span>
                                </span>
                              </div>
                              {/* time */}
                              <div>
                                <i className="bi bi-clock me-1 small text-secondary" />
                                <span className="small text-secondary">
                                  21 hours ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card card-bordered border-light-subtle mb-4 card-hover cursor-pointer">
                    {/* card body */}
                    <div className="card-body">
                      <div>
                        <div className="d-md-flex">
                          <div className="mb-3 mb-md-0 p-2">
                            {/* Img */}
                            <div className="job-circle border">
                              <img
                                src={require("../../src/images/IT - Facebook logo.png")}
                                alt="twbs"
                                width="32"
                                height="32"
                                class="flex-shrink-0"
                              />
                            </div>
                          </div>
                          {/* text */}
                          <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                            <div className="d-flex justify-content-between mb-5">
                              <div>
                                {/* heading */}
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
                                    at{" "}
                                    <span className="fw-semibold">
                                      Facebook
                                    </span>
                                  </span>
                                  {/* star */}
                                  <span className="text-dark ms-2 fw-medium small">
                                    5.0
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline ms-1 me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 small text-secondary">
                                    (324 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                {/* bookmark */}
                                <button
                                  type="button"
                                  class="btn btn-white mb-1"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal1"
                                  data-bs-whatever="@mdo"
                                >
                                  <i
                                    class="bi bi-send text-secondary"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Apply"
                                  ></i>
                                </button>
                                <div
                                  class="modal fade"
                                  id="exampleModal1"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5 fw-bold"
                                          id="exampleModalLabel"
                                        >
                                          Application Form
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <form>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Name
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Full Name"
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Phone
                                            </label>
                                            <input
                                              type="tel"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Contact Number"
                                            />
                                          </div>
                                          <label
                                            className="form-label"
                                            htmlFor="profileEditState"
                                          >
                                            Resume
                                          </label>
                                          <div class="input-group mb-3">
                                            <input
                                              type="file"
                                              class="form-control"
                                              id="inputGroupFile02"
                                            />
                                            <label
                                              class="input-group-text"
                                              for="inputGroupFile02"
                                            >
                                              Upload
                                            </label>
                                          </div>
                                          <div className="col-12"></div>
                                        </form>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                          id="green-button"
                                        >
                                          <i class="bi bi-send text-white me-2"></i>
                                          Send Application
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <i
                                  class="bi bi-bookmark text-secondary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save"
                                ></i>
                              </div>
                            </div>
                            <div className="d-md-flex justify-content-between">
                              <div className="mb-2 mb-md-0">
                                {/* year */}
                                <span className="me-2">
                                  <i className="bi bi-briefcase small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    0 - 5 years
                                  </span>
                                </span>
                                {/* salary */}
                                <span className="me-2">
                                  <i className="bi bi-currency-dollar small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    5k - 8k
                                  </span>
                                </span>
                                {/* location */}
                                <span className="me-2">
                                  <i className="bi  bi-geo-alt small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Jaipur, Rajasthan
                                  </span>
                                </span>
                              </div>
                              {/* time */}
                              <div>
                                <i className="bi bi-clock me-1 small text-secondary" />
                                <span className="small text-secondary">
                                  1 day ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card card-bordered border-light-subtle mb-4 card-hover cursor-pointer">
                    {/* card body */}
                    <div className="card-body">
                      <div>
                        <div className="d-md-flex">
                          <div className="mb-3 mb-md-0 p-2">
                            {/* Img */}
                            <div className="job-circle border">
                              <img
                                src={require("../../src/images/IT - Google icon.png")}
                                alt="twbs"
                                width="32"
                                height="32"
                                class="flex-shrink-0"
                              />
                            </div>
                          </div>
                          <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                            <div className="d-flex justify-content-between mb-5">
                              <div>
                                {/* heading */}
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
                                    at{" "}
                                    <span className="fw-semibold">Google</span>
                                  </span>
                                  {/* star */}
                                  <span className="text-dark ms-2 fw-medium small">
                                    3.9
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline ms-1 me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 small text-secondary">
                                    (424 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                {/* bookmark */}
                                <button
                                  type="button"
                                  class="btn btn-white mb-1"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal1"
                                  data-bs-whatever="@mdo"
                                >
                                  <i
                                    class="bi bi-send text-secondary"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Apply"
                                  ></i>
                                </button>
                                <div
                                  class="modal fade"
                                  id="exampleModal1"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5 fw-bold"
                                          id="exampleModalLabel"
                                        >
                                          Application Form
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <form>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Name
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Full Name"
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Phone
                                            </label>
                                            <input
                                              type="tel"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Contact Number"
                                            />
                                          </div>
                                          <label
                                            className="form-label"
                                            htmlFor="profileEditState"
                                          >
                                            Resume
                                          </label>
                                          <div class="input-group mb-3">
                                            <input
                                              type="file"
                                              class="form-control"
                                              id="inputGroupFile02"
                                            />
                                            <label
                                              class="input-group-text"
                                              for="inputGroupFile02"
                                            >
                                              Upload
                                            </label>
                                          </div>
                                          <div className="col-12"></div>
                                        </form>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                          id="green-button"
                                        >
                                          <i class="bi bi-send text-white me-2"></i>
                                          Send Application
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <i
                                  class="bi bi-bookmark text-secondary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save"
                                ></i>
                              </div>
                            </div>
                            <div className="d-md-flex justify-content-between">
                              <div className="mb-2 mb-md-0">
                                {/* year */}
                                <span className="me-2">
                                  <i className="bi bi-briefcase small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    2 - 6 years
                                  </span>
                                </span>
                                {/* salary */}
                                <span className="me-2">
                                  <i className="bi bi-currency-dollar small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Not disclosed
                                  </span>
                                </span>
                                {/* location */}
                                <span className="me-2">
                                  <i className="bi  bi-geo-alt small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Hastsal, Delhi
                                  </span>
                                </span>
                              </div>
                              {/* time */}
                              <div>
                                <i className="bi bi-clock me-1 small text-secondary" />
                                <span className="small text-secondary">
                                  1 day ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card card-bordered border-light-subtle mb-4 card-hover cursor-pointer">
                    {/* card body */}
                    <div className="card-body">
                      <div>
                        <div className="d-md-flex">
                          <div className="mb-3 mb-md-0 p-2">
                            {/* Img */}
                            <div className="job-circle border">
                              <img
                                src={require("../../src/images/IT - TCS logo.png")}
                                alt="twbs"
                                width="32"
                                height="32"
                                class="flex-shrink-0"
                              />
                            </div>
                          </div>
                          {/* text */}
                          <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                            <div className="d-flex justify-content-between mb-5">
                              <div>
                                {/* heading */}
                                <h3 className="mb-1 fs-6">
                                  <a
                                    href="../jobs/job-single.html"
                                    className="text-inherit"
                                  >
                                    Lead Software Engineer
                                  </a>
                                </h3>
                                <div>
                                  <span className="text-secondary small">
                                    at{" "}
                                    <span className="fw-semibold">
                                      Tata Consultancy Services
                                    </span>
                                  </span>
                                  {/* star */}
                                  <span className="text-dark ms-2 fw-medium small">
                                    3.9
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline ms-1 me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 small text-secondary">
                                    (523 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                {/* bookmark */}
                                <button
                                  type="button"
                                  class="btn btn-white mb-1"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal1"
                                  data-bs-whatever="@mdo"
                                >
                                  <i
                                    class="bi bi-send text-secondary"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Apply"
                                  ></i>
                                </button>
                                <div
                                  class="modal fade"
                                  id="exampleModal1"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5 fw-bold"
                                          id="exampleModalLabel"
                                        >
                                          Application Form
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <form>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Name
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Full Name"
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Phone
                                            </label>
                                            <input
                                              type="tel"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Contact Number"
                                            />
                                          </div>
                                          <label
                                            className="form-label"
                                            htmlFor="profileEditState"
                                          >
                                            Resume
                                          </label>
                                          <div class="input-group mb-3">
                                            <input
                                              type="file"
                                              class="form-control"
                                              id="inputGroupFile02"
                                            />
                                            <label
                                              class="input-group-text"
                                              for="inputGroupFile02"
                                            >
                                              Upload
                                            </label>
                                          </div>
                                          <div className="col-12"></div>
                                        </form>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                          id="green-button"
                                        >
                                          <i class="bi bi-send text-white me-2"></i>
                                          Send Application
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <i
                                  class="bi bi-bookmark text-secondary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save"
                                ></i>
                              </div>
                            </div>
                            <div className="d-md-flex justify-content-between">
                              <div className="mb-2 mb-md-0">
                                {/* year */}
                                <span className="me-2">
                                  <i className="bi bi-briefcase small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    0 - 2 years
                                  </span>
                                </span>
                                {/* salary */}
                                <span className="me-2">
                                  <i className="bi bi-currency-dollar small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Not disclosed
                                  </span>
                                </span>
                                {/* location */}
                                <span className="me-2">
                                  <i className="bi  bi-geo-alt small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Pune, Chennai
                                  </span>
                                </span>
                              </div>
                              {/* time */}
                              <div>
                                <i className="bi bi-clock me-1 small text-secondary" />
                                <span className="small text-secondary">
                                  1 Month ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="card card-bordered border-light-subtle mb-4 card-hover cursor-pointer">
                    {/* card body */}
                    <div className="card-body">
                      <div>
                        <div className="d-md-flex">
                          <div className="mb-3 mb-md-0 p-2">
                            {/* Img */}
                            <div className="job-circle border">
                              <img
                                src={require("../../src/images/IT - Twitter X black.png")}
                                alt="twbs"
                                width="28"
                                height="28"
                                class="flex-shrink-0"
                              />
                            </div>
                          </div>
                          {/* text */}
                          <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                            <div className="d-flex justify-content-between mb-5">
                              <div>
                                {/* heading */}
                                <h3 className="mb-1 fs-6">
                                  <a
                                    href="../jobs/job-single.html"
                                    className="text-inherit"
                                  >
                                    Senior Full Stack Engineer
                                  </a>
                                </h3>
                                <div>
                                  <span className="text-secondary small">
                                    at{" "}
                                    <span className="fw-semibold">
                                      Twitter X
                                    </span>
                                  </span>
                                  {/* star */}
                                  <span className="text-dark ms-2 fw-medium small">
                                    4.9
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline ms-1 me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 small text-secondary">
                                    (923 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                {/* bookmark */}
                                <button
                                  type="button"
                                  class="btn btn-white mb-1"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal1"
                                  data-bs-whatever="@mdo"
                                >
                                  <i
                                    class="bi bi-send text-secondary"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Apply"
                                  ></i>
                                </button>
                                <div
                                  class="modal fade"
                                  id="exampleModal1"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5 fw-bold"
                                          id="exampleModalLabel"
                                        >
                                          Application Form
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <form>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Name
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Full Name"
                                            />
                                          </div>
                                          <div class="mb-3">
                                            <label
                                              for="recipient-name"
                                              class="col-form-label"
                                            >
                                              Phone
                                            </label>
                                            <input
                                              type="tel"
                                              class="form-control"
                                              id="recipient-name"
                                              placeholder="Contact Number"
                                            />
                                          </div>
                                          <label
                                            className="form-label"
                                            htmlFor="profileEditState"
                                          >
                                            Resume
                                          </label>
                                          <div class="input-group mb-3">
                                            <input
                                              type="file"
                                              class="form-control"
                                              id="inputGroupFile02"
                                            />
                                            <label
                                              class="input-group-text"
                                              for="inputGroupFile02"
                                            >
                                              Upload
                                            </label>
                                          </div>
                                          <div className="col-12"></div>
                                        </form>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                          id="green-button"
                                        >
                                          <i class="bi bi-send text-white me-2"></i>
                                          Send Application
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <i
                                  class="bi bi-bookmark text-secondary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save"
                                ></i>
                              </div>
                            </div>
                            <div className="d-md-flex justify-content-between">
                              <div className="mb-2 mb-md-0">
                                {/* year */}
                                <span className="me-2">
                                  <i className="bi bi-briefcase small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    2 - 6 years
                                  </span>
                                </span>
                                {/* salary */}
                                <span className="me-2">
                                  <i className="bi bi-currency-dollar small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Not disclosed
                                  </span>
                                </span>
                                {/* location */}
                                <span className="me-2">
                                  <i className="bi  bi-geo-alt small text-secondary" />
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Ahmedabad, Gujarat
                                  </span>
                                </span>
                              </div>
                              {/* time */}
                              <div>
                                <i className="bi bi-clock me-1 small text-secondary" />
                                <span className="small text-secondary">
                                  2 Month ago
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul
                    className="justify-content-center mb-0 pagination"
                    role="navigation"
                    aria-label="Pagination"
                  >
                    <li className="previous paginationDisabled">
                      <a
                        className="page-link mx-1 rounded "
                        tabIndex={-1}
                        role="button"
                        aria-disabled="true"
                        aria-label="Previous page"
                        rel="prev"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          height="14px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          id="green-text"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a
                        rel="canonical"
                        role="button"
                        className="page-link mx-1 rounded"
                        tabIndex={-1}
                        aria-label="Page 1 is your current page"
                        aria-current="page"
                        id="green-button"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        rel="next"
                        role="button"
                        className="page-link mx-1 rounded"
                        tabIndex={0}
                        aria-label="Page 2"
                        id="green-text"
                      >
                        2
                      </a>
                    </li>
                    <li className="next">
                      <a
                        className="page-link mx-1 rounded"
                        tabIndex={0}
                        role="button"
                        aria-disabled="false"
                        aria-label="Next page"
                        rel="next"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          height="14px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          id="green-text"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  role="tabpanel"
                  id="react-aria1713998618-:r4:-tabpane-grid"
                  aria-labelledby="react-aria1713998618-:r4:-tab-grid"
                  className="fade pb-4 px-0 tab-pane"
                >
                  <div className="row">
                    <div className="mb-4 col-lg-6 col-12">
                      <div className="card-bordered card-hover cursor-pointer h-100 card">
                        <div className="card-body">
                          <div className="mb-3 mb-md-0">
                            <img
                              src="/static/media/job-list-logo-1.72f4141c63f08a9fc5cf1bc5e5d34948.svg"
                              alt=""
                              className="icon-shape border rounded-circle"
                            />
                          </div>
                          <div className="w-100 mt-3">
                            <div className="d-flex justify-content-between mb-4">
                              <div>
                                <h5 className="mb-1">
                                  <a
                                    className="text-inherit me-1"
                                    href="/marketing/jobs/listing/helpdesk-software-engineer-web3crypto"
                                  >
                                    Software Engineer
                                  </a>
                                  <span className="badge bg-danger-soft">
                                    Featured Job
                                  </span>
                                </h5>
                                <div>
                                  <span className="text-secondary">
                                    at HelpDesk{" "}
                                  </span>
                                  <span className="text-dark ms-2 fw-medium small">
                                    4.5{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 text-secondary">
                                    (131 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-bookmark text-muted bookmark"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <div className="mb-2 mb-md-0">
                                <div className="mt-1">
                                  <i class="bi bi-briefcase text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    1 - 5 years
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-currency-dollar text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    12k - 18k
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-geo-alt text-secondary"></i>
                                  <span className="ms-1 text-secondary">
                                    Ahmedabad, Gujarat
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <i class="bi bi-clock text-secondary"></i>
                              <span>21 hours ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 col-lg-6 col-12">
                      <div className="card-bordered card-hover cursor-pointer h-100 card">
                        <div className="card-body">
                          <div className="mb-3 mb-md-0">
                            <img
                              src="/static/media/job-list-logo-2.dca64df1e89aa8bb04b61a5d67c1d863.svg"
                              alt=""
                              className="icon-shape border rounded-circle"
                            />
                          </div>
                          <div className="w-100 mt-3">
                            <div className="d-flex justify-content-between mb-4">
                              <div>
                                <h5 className="mb-1">
                                  <a
                                    className="text-inherit me-1"
                                    href="/marketing/jobs/listing/airtable-senior-react-developer"
                                  >
                                    Senior React Developer
                                  </a>
                                </h5>
                                <div>
                                  <span className="text-secondary">
                                    at Airtable{" "}
                                  </span>
                                  <span className="text-dark ms-2 fw-medium small">
                                    4.5{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 text-secondary">
                                    (324 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-bookmark text-muted bookmark"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <div className="mb-2 mb-md-0">
                                <div className="mt-1">
                                  <i class="bi bi-briefcase text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    0 - 5 years
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-currency-dollar text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    5k - 8k
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-geo-alt text-secondary"></i>
                                  <span className="ms-1 text-secondary">
                                    Jaipur, Rajasthan
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <i class="bi bi-clock text-secondary"></i>
                              <span>1 day ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 col-lg-6 col-12">
                      <div className="card-bordered card-hover cursor-pointer h-100 card">
                        <div className="card-body">
                          <div className="mb-3 mb-md-0">
                            <img
                              src="/static/media/job-list-logo-3.4b6f1a32557dc8ef728c49f5d1cf872c.svg"
                              alt=""
                              className="icon-shape border rounded-circle"
                            />
                          </div>
                          <div className="w-100 mt-3">
                            <div className="d-flex justify-content-between mb-4">
                              <div>
                                <h5 className="mb-1">
                                  <a
                                    className="text-inherit me-1"
                                    href="/marketing/jobs/listing/square-software-engineer-web3crypto"
                                  >
                                    Software Engineer
                                  </a>
                                </h5>
                                <div>
                                  <span className="text-secondary">
                                    at Square
                                  </span>
                                  <span className="text-dark ms-2 fw-medium small">
                                    3.9{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 text-secondary">
                                    (424 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-bookmark text-muted bookmark"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <div className="mb-2 mb-md-0">
                                <div className="mt-1">
                                  <i class="bi bi-briefcase text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    2 - 6 years
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-currency-dollar text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Not discloses
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-geo-alt text-secondary"></i>
                                  <span className="ms-1 text-secondary">
                                    Hastsal, Delhi
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <i class="bi bi-clock text-secondary"></i>
                              <span>1 day ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 col-lg-6 col-12">
                      <div className="card-bordered card-hover cursor-pointer h-100 card">
                        <div className="card-body">
                          <div className="mb-3 mb-md-0">
                            <img
                              src="/static/media/job-list-logo-4.9970e89e86b3776c207f26761bf28d0a.svg"
                              alt=""
                              className="icon-shape border rounded-circle"
                            />
                          </div>
                          <div className="w-100 mt-3">
                            <div className="d-flex justify-content-between mb-4">
                              <div>
                                <h5 className="mb-1">
                                  <a
                                    className="text-inherit me-1"
                                    href="/marketing/jobs/listing/dot-lead-software-engineer"
                                  >
                                    Lead Software Engineer
                                  </a>
                                </h5>
                                <div>
                                  <span className="text-secondary">
                                    at Dot{" "}
                                  </span>
                                  <span className="text-dark ms-2 fw-medium small">
                                    3.9{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 text-secondary">
                                    (523 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-bookmark text-muted bookmark"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <div className="mb-2 mb-md-0">
                                <div className="mt-1">
                                  <i class="bi bi-briefcase text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    0 - 2 years
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-currency-dollar text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Not discloses
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-geo-alt text-secondary"></i>
                                  <span className="ms-1 text-secondary">
                                    Pune, Chennai
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <i class="bi bi-clock text-secondary"></i>
                              <span>1 Month ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 col-lg-6 col-12">
                      <div className="card-bordered card-hover cursor-pointer h-100 card">
                        <div className="card-body">
                          <div className="mb-3 mb-md-0">
                            <img
                              src="/static/media/job-list-logo-5.c0703cc85304eb7e5f3f150c5d228d6e.svg"
                              alt=""
                              className="icon-shape border rounded-circle"
                            />
                          </div>
                          <div className="w-100 mt-3">
                            <div className="d-flex justify-content-between mb-4">
                              <div>
                                <h5 className="mb-1">
                                  <a
                                    className="text-inherit me-1"
                                    href="/marketing/jobs/listing/toggle-senior-full-stack-engineer"
                                  >
                                    Senior Full Stack Engineer
                                  </a>
                                </h5>
                                <div>
                                  <span className="text-secondary">
                                    at Toggle{" "}
                                  </span>
                                  <span className="text-dark ms-2 fw-medium small">
                                    4.9{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 text-secondary">
                                    (923 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-bookmark text-muted bookmark"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <div className="mb-2 mb-md-0">
                                <div className="mt-1">
                                  <i class="bi bi-briefcase text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    2 - 6 years
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-currency-dollar text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Not discloses
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-geo-alt text-secondary"></i>
                                  <span className="ms-1 text-secondary">
                                    Ahmedabad, Gujarat
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <i class="bi bi-clock text-secondary"></i>
                              <span>2 Month ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 col-lg-6 col-12">
                      <div className="card-bordered card-hover cursor-pointer h-100 card">
                        <div className="card-body">
                          <div className="mb-3 mb-md-0">
                            <img
                              src="/static/media/job-list-logo-1.72f4141c63f08a9fc5cf1bc5e5d34948.svg"
                              alt=""
                              className="icon-shape border rounded-circle"
                            />
                          </div>
                          <div className="w-100 mt-3">
                            <div className="d-flex justify-content-between mb-4">
                              <div>
                                <h5 className="mb-1">
                                  <a
                                    className="text-inherit me-1"
                                    href="/marketing/jobs/listing/helpscout-software-engineer-web3crypto"
                                  >
                                    Software Engineer
                                  </a>
                                </h5>
                                <div>
                                  <span className="text-secondary">
                                    at HelpScout{" "}
                                  </span>
                                  <span className="text-dark ms-2 fw-medium small">
                                    4.9{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={10}
                                      height={10}
                                      fill="currentColor"
                                      className="bi bi-star-fill text-warning align-baseline me-1"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                  </span>
                                  <span className="ms-0 text-secondary">
                                    (923 Reviews)
                                  </span>
                                </div>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-bookmark text-muted bookmark"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <div className="mb-2 mb-md-0">
                                <div className="mt-1">
                                  <i class="bi bi-briefcase text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    3 - 6 years
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-currency-dollar text-secondary"></i>
                                  <span className="ms-1 fw-normal small text-secondary">
                                    Not discloses
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <i class="bi bi-geo-alt text-secondary"></i>
                                  <span className="ms-1 text-secondary">
                                    Surat, Gujarat
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <i class="bi bi-clock text-secondary"></i>
                              <span>3 Month ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="justify-content-center mb-0 pagination"
                    role="navigation"
                    aria-label="Pagination"
                  >
                    <li className="previous paginationDisabled">
                      <a
                        className="page-link mx-1 rounded "
                        tabIndex={-1}
                        role="button"
                        aria-disabled="true"
                        aria-label="Previous page"
                        rel="prev"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          height="14px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a
                        rel="canonical"
                        role="button"
                        className="page-link mx-1 rounded"
                        tabIndex={-1}
                        aria-label="Page 1 is your current page"
                        aria-current="page"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        rel="next"
                        role="button"
                        className="page-link mx-1 rounded"
                        tabIndex={0}
                        aria-label="Page 2"
                      >
                        2
                      </a>
                    </li>
                    <li className="next">
                      <a
                        className="page-link mx-1 rounded"
                        tabIndex={0}
                        role="button"
                        aria-disabled="false"
                        aria-label="Next page"
                        rel="next"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          height="14px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobList;
