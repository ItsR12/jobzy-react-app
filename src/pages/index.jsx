import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginCandidate from "../pages/login-candidate";
import JobList from "./joblist";
import NewJob from "./newjob";
import Stats from "../components/stats";
import "../styles/style.css";
import Marquee from "react-fast-marquee";
import Img1 from "../../src/images/job-hero-block-1.svg";
import Img2 from "../../src/images/job-hero-block-2.svg";
import Img3 from "../../src/images/job-hero-block-3.svg";

const IndexPage = () => {
  return (
    <div className="containerfluid">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="position-relative pt-8 pt-xl-9 mt-5">
        <div className="container position-relative z-index-1 mb-5 mb-lg-7 pb-sm-6">
          <div className="row g-4 g-xxl-5">
            {/* Hero content START */}
            <div className="col-lg-10 col-xl-8 text-center mx-auto">
              {/* SVG decoration */}
              <figure className="position-absolute start-0 bottom-0 rotate-33 ms-7 mb-8">
                <svg
                  width="101.6px"
                  height="94.6px"
                  viewBox="0 0 101.6 94.6"
                  style={{ enableBackground: "new 0 0 101.6 94.6" }}
                  xmlSpace="preserve"
                >
                  <path
                    className="fill-primary"
                    d="M26.6,26.1c-4.7,0.8-9.3,1.8-13.9,2.9c-4.8,1.2-8.3,1.4-8.6,6.9c-0.1,1.8-0.2,4.5,1.3,5.7 c1.4,1.1,4.3,1.4,5.9,1.8c4.6,1.2,9.3,2.2,14,3.2c1.3,0.3,1.9-1.7,0.6-2c-3.3-0.7-6.6-1.5-10-2.2c-2.3-0.5-4.6-1.1-6.8-1.7 c-2.7-0.8-3-1.1-2.9-4.3c0.1-3.2,0.9-3.7,3.8-4.6c2.3-0.7,4.7-1.2,7-1.7c3.4-0.7,6.8-1.4,10.2-2C28.5,27.9,27.9,25.9,26.6,26.1 L26.6,26.1z"
                  />
                  <path
                    className="fill-primary"
                    d="M94,27.3c0.5-0.1,1.1-0.2,1.5-0.1c1.8,0.4,1.4,2.4,1.4,3.9c0,1.5,0.1,3.2-0.5,4.6c-0.6,1.5-2.1,2-3.7,2.1 c-1.3,0-1.3,2.1,0,2.1c1.7-0.1,3.9-0.6,4.9-2c1.5-2,1.3-5.2,1.3-7.5c0-2,0-4-2.1-4.9c-1.1-0.5-2.4-0.4-3.5-0.2 C92.1,25.6,92.7,27.6,94,27.3L94,27.3z"
                  />
                  <path
                    className="fill-mode"
                    d="M30.2,8c6.9,2.7,13.9,5.1,21,7.3c11.1,3.4,21.7,5.1,33.2,6.1c4.2,0.3,8.3,0.4,8.2,5.4 c-0.1,4.4,0.2,10.9-1.7,14.9c-2.2,4.6-9.7,3.4-14.1,3.9c-5,0.5-10,1.4-14.9,2.3C50.2,50,37.3,52.4,26.8,58.3 c-1.2,0.7-0.1,2.5,1,1.8c10.8-6.1,24.3-8.4,36.3-10.6c5.6-1,11.3-2,17.1-2.3c4.1-0.2,8.8,0,11.2-4c2.4-3.9,1.7-9.9,2.1-14.3 c0.2-2.7,0.6-5.8-1.7-7.7c-3.1-2.5-9.1-2.1-12.7-2.3c-6.6-0.4-13-1.5-19.4-3.2c-10.2-2.6-20.2-6-30-9.8C29.5,5.5,28.9,7.5,30.2,8 L30.2,8z"
                  />
                  <path
                    className="fill-mode"
                    d="M72.4,46c-3.9,0.6-8.2,3-8.9,7.2c-0.6,3.7,1.9,6.5,5.5,6.6c-0.2-0.6-0.3-1.3-0.5-1.9c-3.8,2-8,5.5-8.7,9.9 c-0.5,3.7,1.9,6.4,5.6,6.5c-0.2-0.6-0.5-1.2-0.7-1.8c-4.1,3.7-8.3,10.4-6.2,16.1c1.5,4.1,5.9,4.2,9.1,2c7.4-5,9.4-16.1,11.7-24 c1.9-6.7,3.7-13.4,5.2-20.1c0.3-1.3-1.7-1.9-2-0.6c-0.7,3.4-1.6,6.8-2.5,10.1c-2.2,8.3-4,17.3-7.7,25c-1.3,2.7-7,12.4-11.2,8.2 c-4.1-4.1,1.8-12.2,5-15.2c0.7-0.6,0.1-1.8-0.7-1.8c-4.8-0.1-3.5-5.9-1.3-8.4c1.5-1.7,3.4-3.1,5.4-4.1c1-0.5,0.5-1.9-0.5-1.9 c-4.2-0.1-4.1-5.3-1.4-7.6c1.5-1.2,3.4-1.9,5.2-2.1C74.3,47.8,73.7,45.8,72.4,46L72.4,46z"
                  />
                  <path
                    className="fill-mode"
                    d="M13.1,29.8c0.3-6.5,1.7-15.4,5.2-21c2.8-4.3,5.9-1.6,6.8,2.3c1.4,5.9,0.8,12.4,0.5,18.4 c-0.3,7.4-0.5,14.9-2.7,22.1c-0.8,2.8-2.7,8.8-6.3,9.5C12.1,62,13,45.8,13.1,42.5c0.1-1.3-2-1.3-2.1,0c-0.1,3.2-0.1,6.3,0.1,9.5 c0.2,3,0.2,8,2.5,10.4c4.7,4.9,10-5.6,11.1-8.7c2.3-6.7,2.8-13.9,3.1-20.9c0.3-6.5,0.8-13.2-0.1-19.7c-0.4-2.8-1-6.3-3.6-7.9 c-2.4-1.4-4.9-0.7-6.5,1.4c-2.8,3.4-3.8,8.5-4.7,12.7c-0.7,3.5-1.5,7.1-1.7,10.6C11,31.1,13.1,31.1,13.1,29.8L13.1,29.8z"
                  />
                  <path
                    className="fill-mode"
                    d="M15.7,63.4c4.5,0,10.9,0.4,12.9-4.5c3.7-9.1,3.9-20.4,4.4-30c0.1-1.3-2-1.3-2.1,0c-0.5,9-1.1,18.3-3.5,27 c-0.8,2.6-1.1,4.1-4,4.8c-2.5,0.6-5.1,0.6-7.7,0.6C14.4,61.3,14.4,63.4,15.7,63.4L15.7,63.4z"
                  />
                  <path
                    className="fill-mode"
                    d="M22,6.4c1.8-0.2,4.9-0.8,6.5,0c1.4,0.7,1.5,2.8,1.7,4.2c0.5,2.7,0.6,5.5,0.7,8.2c0,1.3,2.1,1.3,2.1,0 c0-3.2-0.3-6.4-0.9-9.6C31.9,8,31.6,6,30.4,5c-2-1.6-6-1-8.3-0.7C20.7,4.5,20.7,6.6,22,6.4L22,6.4z"
                  />
                  <path
                    className="fill-primary"
                    d="M82.9,20.8c0,8.6-1.3,17-3.9,25.2c-0.4,1.3,1.6,1.8,2,0.6c2.7-8.4,4-17,4-25.7C85,19.4,82.9,19.4,82.9,20.8 L82.9,20.8z"
                  />
                  <path
                    className="fill-mode"
                    d="M77.6,20.6c0.6,3,0.6,6,0.1,9c-0.2,1.3,1.8,1.9,2,0.6c0.6-3.4,0.6-6.7-0.1-10.1C79.4,18.7,77.4,19.3,77.6,20.6 L77.6,20.6z"
                  />
                  <path
                    className="fill-mode"
                    d="M77.2,34.5c-0.7,3.9-1.8,7.6-3.3,11.2c-0.5,1.2,1.3,2.3,1.8,1c1.6-3.8,2.8-7.7,3.6-11.7 C79.4,33.8,77.4,33.2,77.2,34.5L77.2,34.5z"
                  />
                  <path
                    className="fill-primary"
                    d="M41.1,47.2c4.3-1.5,8.7-2.7,13.1-3.7c1.3-0.3,0.8-2.3-0.6-2c-4.4,1-8.8,2.2-13.1,3.7 C39.3,45.6,39.9,47.6,41.1,47.2L41.1,47.2z"
                  />
                  <path
                    className="fill-mode"
                    d="M58.5,42.9c0.1,0.1,0.1,0.1,0.2,0.2c0.9,0.9,2.4-0.5,1.5-1.5c-0.1-0.1-0.1-0.1-0.2-0.2 C59,40.5,57.6,41.9,58.5,42.9L58.5,42.9z"
                  />
                </svg>
              </figure>
              {/* Title */}
              <div className="position-relative mb-5 mt-5">
                <h1 className="display-3 mb-0 lh-sm-base fw-bold">
                  Discover exciting career{" "}
                  <span id="green-text">opportunities</span> at
                  <span className="position-relative ms-4">
                    Jobzy
                    {/* SVG START */}
                    <span className="position-absolute top-50 start-50 translate-middle z-index-n1 mt-n1 d-none d-lg-block">
                      <svg
                        width={220}
                        height={150}
                        className="mt-2"
                        viewBox="0 0 219 87"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M214 6.5H5V81H214V6.5Z"
                          stroke="#04D2C1"
                          strokeWidth={2}
                        />
                        <path className="fill-mode" d="M209 0H219V10H209V0Z" />
                        <path
                          className="fill-mode"
                          d="M209 77H219V87H209V77Z"
                        />
                        <path className="fill-mode" d="M0 0H10V10H0V0Z" />
                        <path className="fill-mode" d="M0 75H10V85H0V75Z" />
                      </svg>
                    </span>
                    {/* SVG END */}
                  </span>
                </h1>
                {/* Decoration */}
                <div className="position-absolute top-100 start-100 translate-middle ms-lg-7 ms-xl-6 d-none d-lg-block">
                  <div className="podition-relative">
                    <small className="badge text-bg-dark rounded-pill">
                      The Designer
                    </small>
                    <span className="fs-5 position-absolute start-0 top-0 fa-rotate-270 mt-n4 ms-n4">
                      <i className="bi bi-cursor-fill" id="green-text" />
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-secondary">
                Join our team of digital pioneers, where creativity meets
                innovation. Explore exciting career opportunities at Jobzy and
                be part of shaping the digital future.
              </p>
              {/* Search form START */}
              <div className="bg-light border rounded-3 position-relative px-4 py-3 mt-5">
                {/* Form START */}
                <form className="row g-3 justify-content-center align-items-center">
                  {/* Input */}
                  <div className="col-lg-5">
                    <div className="position-relative">
                      <input
                        className="form-control form-control-lg me-1 ps-5"
                        type="text"
                        placeholder="Job title"
                      />
                      {/* Icon */}
                      <span className="position-absolute top-50 start-0 translate-middle ps-5">
                        <i className="bi bi-briefcase" />
                      </span>
                    </div>
                  </div>
                  {/* Select */}
                  <div className="col-lg-5">
                    <div className="position-relative">
                      <select
                        className="form-select form-select-lg ps-5"
                        data-search-enabled="true"
                      >
                        <option>Location</option>
                        <option>Canada</option>
                        <option>USA</option>
                        <option>Paris</option>
                        <option>India</option>
                        <option>London</option>
                      </select>
                      {/* Icons */}
                      <span className="position-absolute top-50 start-0 translate-middle ps-5">
                        <i className="bi bi-geo-alt" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-2 d-grid">
                    {/* Search */}
                    <a className="btn btn-dark mb-0" href="#">
                      <i className="bi bi-search me-2" />
                      Search
                    </a>
                  </div>
                </form>
                {/* Form END */}
              </div>
              {/* Search form END */}
              {/* Suggestion */}
              <ul className="list-inline mb-0 mt-3">
                <li className="list-inline-item">
                  {" "}
                  <span className="text-secondary">Suggestion: </span>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="text-primary-hover heading-color mb-lg-0"
                    href="#"
                    id="suggestion"
                  >
                    Web design,
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="text-primary-hover heading-color mb-lg-0"
                    href="#"
                    id="suggestion"
                  >
                    Digital Marketing,
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="text-primary-hover heading-color mb-lg-0"
                    href="#"
                    id="suggestion"
                  >
                    UI/UX design,
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="text-primary-hover heading-color mb-lg-0"
                    href="#"
                    id="suggestion"
                  >
                    Web development
                  </a>{" "}
                </li>
              </ul>
            </div>
            {/* Hero content END */}
          </div>{" "}
          {/* Row END */}
        </div>
        {/* Slider START */}
        <div
          className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
          data-swiper-options='{
			"spaceBetween": 50, 
			"speed":"14000",
			"autoplay":{
				"delay": 0, 
				"disableOnInteraction": false
			},
			"breakpoints": {
				"576": {"slidesPerView": 2},
				"992": {"slidesPerView": 3},
				"1200": {"slidesPerView": 4},
				"1400": {"slidesPerView": 5}
			}}'
        >
          <div
            className="swiper-wrapper align-items-center"
            id="swiper-wrapper-5a7c705da1ccdc61"
            aria-live="off"
            style={{
              transitionDuration: "14000ms",
              transform: "translate3d(-1557.6px, 0px, 0px)",
            }}
          >
            {/* Slider item */}
            {/* Slider item */}
            {/* Slider item */}
            {/* Slider item */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="4 / 9"
              data-swiper-slide-index={3}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img
                src="assets/images/about/04.jpg"
                className="rounded"
                alt=""
              />
            </div>
            {/* Slider item */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="5 / 9"
              data-swiper-slide-index={4}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img
                src="assets/images/about/14.jpg"
                className="rounded"
                alt=""
              />
            </div>
            {/* Slider item */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="6 / 9"
              data-swiper-slide-index={5}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img src="assets/images/bg/01.jpg" className="rounded" alt="" />
            </div>
            {/* Slider item */}
            <div
              className="swiper-slide swiper-slide-prev"
              role="group"
              aria-label="7 / 9"
              data-swiper-slide-index={6}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img
                src="assets/images/about/16.jpg"
                className="rounded"
                alt=""
              />
            </div>
            {/* Slider item */}
            <div
              className="swiper-slide swiper-slide-active"
              role="group"
              aria-label="8 / 9"
              data-swiper-slide-index={7}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img
                src="assets/images/about/08.jpg"
                className="rounded"
                alt=""
              />
            </div>
            {/* Slider item */}
            <div
              className="swiper-slide swiper-slide-next"
              role="group"
              aria-label="9 / 9"
              data-swiper-slide-index={8}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img
                src="assets/images/about/03.jpg"
                className="rounded"
                alt=""
              />
            </div>
            <div
              className="swiper-slide"
              role="group"
              aria-label="1 / 9"
              data-swiper-slide-index={0}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img
                src="assets/images/about/01.jpg"
                className="rounded"
                alt=""
              />
            </div>
            <div
              className="swiper-slide"
              role="group"
              aria-label="2 / 9"
              data-swiper-slide-index={1}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img
                src="assets/images/about/02.jpg"
                className="rounded"
                alt=""
              />
            </div>
            <div
              className="swiper-slide"
              role="group"
              aria-label="3 / 9"
              data-swiper-slide-index={2}
              style={{ width: "339.4px", marginRight: 50 }}
            >
              <img
                src="assets/images/about/12.jpg"
                className="rounded"
                alt=""
              />
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        {/* Slider END */}
      </section>

      {/* Companies */}
      <div className="container-fluid my-5 mb-5">
        <div className="row my-5 mt-sm-2">
          <Marquee speed={50} loop={100} pauseOnHover={true}>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Accenture.png")}
                alt=""
              />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Adobe.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Amazon.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Cisco.png")} alt="" />
            </div>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Cognizant.png")}
                alt=""
              />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Dell.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Facebook.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Google.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - HP.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - IBM.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Infosys.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Intel.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Meta.png")} alt="" />
            </div>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Microsoft.png")}
                alt=""
              />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - NVIDIA.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Oracle.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - SAP.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - Sony.png")} alt="" />
            </div>
            <div className="companylogo">
              <img src={require("../../src/images/IT - TCS.png")} alt="" />
            </div>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Tech Mahindra.png")}
                alt=""
              />
            </div>
            <div className="companylogo">
              <img
                src={require("../../src/images/IT - Wipro.png")}
                alt=""
                style={{ width: "3%" }}
              />
            </div>
          </Marquee>
        </div>
      </div>

      <Stats />

      {/* Features */}
      <section className="pt-0">
        <div className="container mt-5 mb-5">
          <div className="row align-items-center mb-5">
            {/* Image */}
            <div className="col-lg-5 text-center position-relative">
              <img
                src={require("../../src/images/Random 3.jpg")}
                className="rounded"
                alt=""
              />
            </div>
            {/* Content */}
            <div className="col-lg-7 ps-lg-7 mt-5 mt-lg-0">
              <h2 className="mb-4 fw-bold display-6">
                Company value to reach quality in work-life
              </h2>
              <p className="mb-4 mb-sm-5 text-secondary">
                Join our team to experience a workplace that values and supports
                your quality of life, empowering you to reach new heights in
                your career.
              </p>
              {/* Feature START */}
              <div className="row row-cols-1 row-cols-sm-2 g-4 g-sm-6">
                {/* item */}
                <div className="col">
                  <div className="card card-body bg-transparent p-0 border-0">
                    <span className="h4 text-primary">
                      <i className="bi bi-suit-heart" id="green-text" />
                    </span>
                    <h6 className="mb-2">Honesty</h6>
                    <p className="mb-0 text-secondary">
                      The implementation of multilingual support involves.
                    </p>
                  </div>
                </div>
                {/* item */}
                <div className="col">
                  <div className="card card-body bg-transparent p-0 border-0">
                    <span className="h4 text-primary">
                      <i className="bi bi-fire" id="green-text" />
                    </span>
                    <h6 className="mb-2">Passion</h6>
                    <p className="mb-0 text-secondary">
                      It focuses on creating an intuitive and efficient design.
                    </p>
                  </div>
                </div>
                {/* item */}
                <div className="col">
                  <div className="card card-body bg-transparent p-0 border-0">
                    <span className="h4 text-primary">
                      <i className="bi bi-bullseye" id="green-text" />
                    </span>
                    <h6 className="mb-2">Impact</h6>
                    <p className="mb-0 text-secondary">
                      {" "}
                      It ensures that users can access critical assistance
                      whenever they need it.
                    </p>
                  </div>
                </div>
                {/* item */}
                <div className="col">
                  <div className="card card-body bg-transparent p-0 border-0">
                    <span className="h4 text-primary">
                      <i className="bi bi-trophy" id="green-text" />
                    </span>
                    <h6 className="mb-2">Recognition</h6>
                    <p className="mb-0 text-secondary">
                      These advanced functionalities are designed to provide
                      users.
                    </p>
                  </div>
                </div>
              </div>
              {/* Feature END */}
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </section>

      {/* Joblist */}
      <div className="container mt-5">
        {/* row */}
        <div className="row">
          <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
            <div className="text-center mb-5">
              {/* col */}
              {/* text */}
              <span
                className="text-uppercase fw-semibold ls-md"
                id="green-text"
              >
                Latest Job Opening
              </span>
              {/* heading */}
              <h3 className="h2 fw-bold mt-3 text-secondary">
                Explore remote friendly, flexible job opportunities.
              </h3>
            </div>

            {/* row */}
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
                              at <span className="fw-semibold">Microsoft</span>
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
                          {/* bookmark */}
                          <i class="bi bi-send text-secondary me-1"></i>
                          <i class="bi bi-bookmark text-secondary"></i>
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
                              at <span className="fw-semibold">Facebook</span>
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
                          <i class="bi bi-send text-secondary me-1"></i>
                          <i class="bi bi-bookmark text-secondary"></i>
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
                              at <span className="fw-semibold">Google</span>
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
                          <i class="bi bi-send text-secondary me-1"></i>
                          <i class="bi bi-bookmark text-secondary"></i>
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
                          <i class="bi bi-send text-secondary me-1"></i>
                          <i class="bi bi-bookmark text-secondary"></i>
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
                              at <span className="fw-semibold">Twitter X</span>
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
                          <i class="bi bi-send text-secondary me-1"></i>
                          <i class="bi bi-bookmark text-secondary"></i>
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

            {/* button */}
            <div className="mt-6 text-center">
              <a
                href="#!"
                className="btn btn-outline-primary mb-5"
                id="green-button"
              >
                Browse All Jobs Postings
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <section className="bg-light py-8">
        {/* container */}
        <div className="container py-5">
          <div className="row">
            <div className="offset-xl-1 col-xl-10 col-md-12 col-12 mt-4">
              {/* row */}
              <div className="row text-center">
                <div className="col-md-12 px-lg-8 mb-5">
                  {/* text */}
                  <span
                    className="text-uppercase fw-semibold ls-md"
                    id="green-text"
                  >
                    Top Companies Hiring
                  </span>
                  {/* heading */}
                  <h2 className="h1 fw-bold mt-3 mb-2">
                    Featured companies actively hiring
                  </h2>
                </div>
              </div>
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6 col-12">
                  {/* card */}
                  <div className="card card-bordered card-hover">
                    {/* card body */}
                    <div className="card-body p-3 ms-2 mt-1">
                      <img
                        src={require("../../src/images/IT - Amazon.png")}
                        alt="company"
                        width={70}
                      />
                      <div className="my-4">
                        {/* heading */}
                        <h3 className="lh-1 fw-semibold">Amazon</h3>
                        {/* text */}
                        <p className="mb-0 text-secondary">
                          Worlds largest Internet Company
                        </p>
                      </div>
                      {/* text */}
                      <p className="mb-0">
                        <span className="fw-semibold text-dark me-1">424+</span>
                        <span className="text-secondary">
                          <span className="text-secondary">Job Posting</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* card */}
                  <div className="card card-bordered card-hover">
                    {/* card body */}
                    <div className="card-body p-3">
                      {/* Img */}
                      <img
                        src={require("../../src/images/IT - Google.png")}
                        alt="company"
                        width={70}
                      />
                      <div className="my-4">
                        {/* heading */}
                        <h3 className="lh-1 fw-semibold">Google</h3>
                        {/* text */}
                        <p className="text-secondary">
                          Search the world's information
                        </p>
                      </div>
                      {/* text */}
                      <p className="mb-0">
                        <span className="fw-semibold text-dark me-1">216+</span>
                        <span className="text-secondary">Job Posting</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* card */}
                  <div className="card card-bordered card-hover">
                    {/* card body */}
                    <div className="card-body">
                      <img
                        src={require("../../src/images/IT - Lenovo.png")}
                        alt="company"
                        width={70}
                      />
                      <div className="my-4">
                        {/* heading */}
                        <h3 className="lh-1 fw-semibold">Lenovo</h3>
                        {/* text */}
                        <p className="text-secondary">
                          Official site and buy online the best laptops
                        </p>
                      </div>
                      {/* text */}
                      <p className="mb-0">
                        <span className="fw-semibold text-dark me-1">195+</span>
                        <span className="text-secondary">Job Posting</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* card */}
                  <div className="card card-bordered card-hover">
                    {/* card body */}
                    <div className="card-body">
                      {/* Img */}
                      <img
                        src={require("../../src/images/IT - TCS.png")}
                        alt="company"
                        width={70}
                      />
                      <div className="my-4">
                        {/* heading */}
                        <h3 className="lh-1 fw-semibold">TCS</h3>
                        {/* text */}
                        <p className="text-secondary">
                          India's largest IT Service Company
                        </p>
                      </div>
                      {/* text */}
                      <p className="mb-0">
                        <span className="fw-semibold text-dark me-1">180+</span>
                        <span>
                          <span className="text-secondary">Job Posting</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className="col-12 mt-8 text-center mb-4">
                  <a
                    href="#"
                    className="btn btn-outline-primary"
                    id="green-button"
                  >
                    View All Companies
                  </a>
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

export default IndexPage;
