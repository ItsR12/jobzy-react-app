import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/login.css";

function NewJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentJob, setCurrentJob] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      jobTitle,
      company,
      experience,
      salary,
      location,
    };
    setJobs([...jobs, newJob]);
    resetForm();
  };

  const resetForm = () => {
    setJobTitle("");
    setCompany("");
    setExperience("");
    setSalary("");
    setLocation("");
  };

  const handleEdit = (job) => {
    setEditing(true);
    setCurrentJob(job);
    setJobTitle(job.jobTitle);
    setCompany(job.company);
    setExperience(job.experience);
    setSalary(job.salary);
    setLocation(job.location);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedJob = {
      ...currentJob,
      jobTitle,
      company,
      experience,
      salary,
      location,
    };
    const updatedJobs = jobs.map((job) =>
      job.id === currentJob.id ? updatedJob : job
    );
    setJobs(updatedJobs);
    setEditing(false);
    resetForm();
  };

  const handleDelete = (jobId) => {
    const filteredJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(filteredJobs);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="container mt-3">
        <h3 className="text-secondary">Post new job</h3>
        {/* Form */}
        <form
          className="row gx-3 needs-validation mb-5"
          noValidate=""
          onSubmit={editing ? handleUpdate : handleSubmit}
        >
          {/* First name */}
          <div className="mb-3 col-12 col-md-6">
            <label className="form-label" htmlFor="profileEditFname">
              Job Title
            </label>
            <input
              type="text"
              id="profileEditFname"
              name="profileEditFname"
              className="form-control"
              placeholder="Job title"
              required=""
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <div className="invalid-feedback">Please enter job title.</div>
          </div>
          {/* Last name */}
          <div className="mb-3 col-12 col-md-6">
            <label className="form-label" htmlFor="profileEditLname">
              Company
            </label>
            <input
              type="text"
              id="profileEditLname"
              name="profileEditLname"
              className="form-control"
              placeholder="Company name"
              required=""
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <div className="invalid-feedback">Please enter company name.</div>
          </div>
          {/* Phone */}
          <div className="mb-3 col-12 col-md-6">
            <label className="form-label" htmlFor="profileEditPhone">
              Experience
            </label>
            <input
              type="number"
              id="profileEditPhone"
              name="profileEditPhone"
              className="form-control"
              placeholder="Experience in years"
              required=""
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
            <div className="invalid-feedback">
              Please enter experience in years.
            </div>
          </div>
          {/* Email */}
          <div className="mb-3 col-12 col-md-6">
            <label className="form-label" htmlFor="profileEditPhone">
              Salary
            </label>
            <input
              type="number"
              id="profileEditPhone"
              name="profileEditPhone"
              className="form-control"
              placeholder="Salary in Lacs"
              required=""
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <div className="invalid-feedback">Please enter salary.</div>
          </div>
          {/* Birthday */}
          <div className="mb-3 col-12 col-md-6">
            <label className="form-label" htmlFor="profileEditBirth">
              Location
            </label>
            <input
              className="form-control flatpickr flatpickr-input"
              placeholder="Job location"
              name="profileEditBirth"
              readOnly=""
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />{" "}
            <div className="invalid-feedback">Please enter location.</div>
          </div>
          <div className="col-12">
            {/* Button */}
            <button
              className="btn btn-primary btn btn-primary mt-2 me-1 btn  btn-sm"
              id="green-button"
              type="submit"
            >
              {editing ? "Update" : "Add Job"}
            </button>
          </div>
        </form>
        {/* UL */}
        {/* <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h2 className="mb-1 fs-6 text-inherit">{job.jobTitle}</h2>
              <p>
                {job.company} | {job.experience} | {job.salary} | {job.location}
              </p>
              <button onClick={() => handleEdit(job)}>Edit</button>
              <button onClick={() => handleDelete(job.id)}>Delete</button>
            </li>
          ))}
        </ul> */}

        <h3 className="text-secondary">New Job List</h3>
        {jobs.map((job) => (
          <li key={job.id}>
            <div className="card card-bordered border-light-subtle mb-4 card-hover cursor-pointer">
              {/* card body */}
              <div className="card-body">
                <div>
                  <div className="d-md-flex">
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
                              {job.jobTitle}
                            </a>
                          </h3>
                          <div>
                            <span className="text-secondary small">
                              at{" "}
                              <span className="fw-semibold">{job.company}</span>
                            </span>
                          </div>
                        </div>
                        <div>
                          {/* bookmark */}
                          <button
                            className="btn btn-primary btn btn-primary mt-2 me-1 btn  btn-sm"
                            id="green-button"
                            onClick={() => handleEdit(job)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-primary btn btn-primary mt-2 me-1 btn  btn-sm"
                            id="green-button"
                            onClick={() => handleDelete(job.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="d-md-flex justify-content-between">
                        <div className="mb-2 mb-md-0">
                          {/* year */}
                          <span className="me-2">
                            <i className="bi bi-briefcase small text-secondary" />
                            <span className="ms-1 fw-normal small text-secondary">
                              {job.experience}
                            </span>
                          </span>
                          {/* salary */}
                          <span className="me-2">
                            <i className="bi bi-currency-dollar small text-secondary" />
                            <span className="ms-1 fw-normal small text-secondary">
                              {job.salary}
                            </span>
                          </span>
                          {/* location */}
                          <span className="me-2">
                            <i className="bi  bi-geo-alt small text-secondary" />
                            <span className="ms-1 fw-normal small text-secondary">
                              {job.location}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default NewJob;
