import React from "react";
import "../styles/style.css";
import b1 from "../images/b1.png";
import Footer from "../components/footer";

const UserSetting = () => {
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
                <h4 className="mb-0 fw-bold">Edit Profile Details</h4>
              </div>
              {/* Card body */}
              <div className="card-body ">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center mb-lg-0">
                    <img
                      src={require("../images/AI - Person 1.jpg")}
                      width={100}
                      id="img-uploaded"
                      className="avatar-xl rounded-circle"
                      alt="avatar"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">Your Avatar</h6>
                      <p className="mb-0 small text-secondary">
                        JPG or PNG no bigger than 800px wide and tall.
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="me-1 btn btn-outline-secondary btn-sm mt-2"
                      id="green-button"
                    >
                      Update
                    </a>
                    <a href="#" className="btn btn-outline-danger btn-sm mt-2">
                      Delete
                    </a>
                  </div>
                </div>
                <hr />
                <div>
                  <h6 className="mb-0 text-secondary">Personal Details</h6>
                  <p className="mb-4 small">
                    Edit your personal information and address.
                  </p>
                  {/* Form */}
                  <form className="row gx-3 needs-validation" noValidate="">
                    {/* First name */}
                    <div className="mb-3 col-12 col-md-6">
                      <label className="form-label" htmlFor="profileEditFname">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="profileEditFname"
                        name="profileEditFname"
                        className="form-control"
                        placeholder="First Name"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter first name.
                      </div>
                    </div>
                    {/* Last name */}
                    <div className="mb-3 col-12 col-md-6">
                      <label className="form-label" htmlFor="profileEditLname">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="profileEditLname"
                        name="profileEditLname"
                        className="form-control"
                        placeholder="Last Name"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter last name.
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="mb-3 col-12 col-md-6">
                      <label className="form-label" htmlFor="profileEditPhone">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="profileEditPhone"
                        name="profileEditPhone"
                        className="form-control"
                        placeholder="Phone"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter phone number.
                      </div>
                    </div>
                    {/* Email */}
                    <div className="mb-3 col-12 col-md-6">
                      <label className="form-label" htmlFor="profileEditPhone">
                        Email
                      </label>
                      <input
                        type="email"
                        id="profileEditPhone"
                        name="profileEditPhone"
                        className="form-control"
                        placeholder="Email"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter phone number.
                      </div>
                    </div>
                    {/* Birthday */}
                    <div className="mb-3 col-12 col-md-6">
                      <label className="form-label" htmlFor="profileEditBirth">
                        Birthday
                      </label>
                      <input
                        className="form-control flatpickr flatpickr-input"
                        placeholder="Birth of Date"
                        name="profileEditBirth"
                        readOnly=""
                        type="date"
                        id="birthday"
                      />{" "}
                      <input
                        class="btn btn-primary mt-2 me-1 btn btn-outline-secondary btn-sm"
                        type="submit"
                        value="Submit"
                        id="green-button"
                      />
                      <div className="invalid-feedback">
                        Please choose a date.
                      </div>
                    </div>
                    {/* Address */}
                    <div className="mb-3 col-12 col-md-6">
                      <label
                        className="form-label"
                        htmlFor="profileEditAddress1"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="profileEditAddress1"
                        name="profileEditAddress1"
                        className="form-control"
                        placeholder="Address"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter address.
                      </div>
                    </div>
                    {/* Country */}
                    <div className="mb-3 col-12 col-md-6">
                      <label className="form-label" htmlFor="editCountry">
                        Country
                      </label>
                      <div
                        className="choices"
                        data-type="select-one"
                        tabIndex={0}
                        role="listbox"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="choices__inner">
                          <select
                            className="form-select choices__input"
                            data-choices=""
                            id="editCountry"
                            required=""
                            hidden=""
                            tabIndex={-1}
                            data-choice="active"
                          >
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Select Country
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              India
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Sri Lanka
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Pakistan
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="invalid-feedback">
                        Please choose country.
                      </div>
                    </div>
                    {/* State */}
                    <div className="mb-3 col-12 col-md-6">
                      <label className="form-label" htmlFor="profileEditState">
                        State
                      </label>
                      <div
                        className="choices"
                        data-type="select-one"
                        tabIndex={0}
                        role="listbox"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="choices__inner">
                          <select
                            className="form-select choices__input"
                            data-choices=""
                            id="profileEditState"
                            name="profileEditState"
                            required=""
                            hidden=""
                            tabIndex={-1}
                            data-choice="active"
                          >
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Select State
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Maharashtra
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Uttar Pradesh
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Madhya Pradesh
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Bihar
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              West Bengal
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="invalid-feedback">
                        Please choose state.
                      </div>
                    </div>
                    {/* State */}
                    <div className="mb-3 col-12 col-md-6">
                      <label className="form-label" htmlFor="profileEditState">
                        City
                      </label>
                      <div
                        className="choices"
                        data-type="select-one"
                        tabIndex={0}
                        role="listbox"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="choices__inner">
                          <select
                            className="form-select choices__input"
                            data-choices=""
                            id="profileEditState"
                            name="profileEditState"
                            required=""
                            hidden=""
                            tabIndex={-1}
                            data-choice="active"
                          >
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Select City
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              New Delhi
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Mumbai
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Bangalore
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Kolkata
                            </option>
                            <option
                              value=""
                              data-custom-properties="[object Object]"
                            >
                              Pune
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="invalid-feedback">
                        Please choose state.
                      </div>
                    </div>
                    {/* Resume */}
                    <label className="form-label" htmlFor="profileEditState">
                      Resume
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile02"
                      />
                      <label class="input-group-text" for="inputGroupFile02">
                        Upload
                      </label>
                    </div>
                    <div className="col-12">
                      {/* Button */}
                      <button
                        className="btn btn-primary btn btn-primary mt-2 me-1 btn  btn-sm"
                        type="submit"
                        id="green-button"
                      >
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default UserSetting;
