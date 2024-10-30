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
                Job Title
              </label>
              <input
                type="text"
                id="profileEditFname"
                name="profileEditFname"
                className="form-control"
                placeholder="First Name"
                required=""
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <div className="invalid-feedback">Please enter first name.</div>
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
                placeholder="Last Name"
                required=""
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <div className="invalid-feedback">Please enter last name.</div>
            </div>
            {/* Phone */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="profileEditPhone">
                Experience
              </label>
              <input
                type="text"
                id="profileEditPhone"
                name="profileEditPhone"
                className="form-control"
                placeholder="Phone"
                required=""
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              <div className="invalid-feedback">Please enter phone number.</div>
            </div>
            {/* Email */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="profileEditPhone">
                Salary
              </label>
              <input
                type="email"
                id="profileEditPhone"
                name="profileEditPhone"
                className="form-control"
                placeholder="Email"
                required=""
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <div className="invalid-feedback">Please enter phone number.</div>
            </div>
            {/* Birthday */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="profileEditBirth">
                Location
              </label>
              <input
                className="form-control flatpickr flatpickr-input"
                placeholder="Birth of Date"
                name="profileEditBirth"
                readOnly=""
                type="date"
                id="birthday"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />{" "}
              <input
                class="btn btn-primary mt-2 me-1 btn btn-outline-secondary btn-sm"
                type="submit"
                value="Submit"
                id="green-button"
              />
              <div className="invalid-feedback">Please choose a date.</div>
            </div>
            {/* Address */}
            <div className="mb-3 col-12 col-md-6">
              <label className="form-label" htmlFor="profileEditAddress1">
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
              <div className="invalid-feedback">Please enter address.</div>
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
                    <option value="" data-custom-properties="[object Object]">
                      Select Country
                    </option>
                    <option value="" data-custom-properties="[object Object]">
                      India
                    </option>
                    <option value="" data-custom-properties="[object Object]">
                      Sri Lankda
                    </option>
                    <option value="" data-custom-properties="[object Object]">
                      Pakistan
                    </option>
                  </select>
                </div>
              </div>
              <div className="invalid-feedback">Please choose country.</div>
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
                    <option value="" data-custom-properties="[object Object]">
                      Select State
                    </option>
                    <option value="" data-custom-properties="[object Object]">
                      Maharashtra
                    </option>
                    <option value="" data-custom-properties="[object Object]">
                      Uttar Pradesh
                    </option>
                    <option value="" data-custom-properties="[object Object]">
                      Madhya Pradesh
                    </option>
                    <option value="" data-custom-properties="[object Object]">
                      Bihar
                    </option>
                    <option value="" data-custom-properties="[object Object]">
                      West Bengal
                    </option>
                  </select>
                </div>
              </div>
              <div className="invalid-feedback">Please choose state.</div>
            </div>
            {/* Resume */}
            <label className="form-label" htmlFor="profileEditState">
              Resume
            </label>
            <div class="input-group mb-3">
              <input type="file" class="form-control" id="inputGroupFile02" />
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
</div>;
