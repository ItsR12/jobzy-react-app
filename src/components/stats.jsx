import React, { useEffect, useRef } from "react";
import "../styles/style.css";

const Stats = () => {
  const counters = useRef([]);

  useEffect(() => {
    const countTo = (element, options) => {
      const settings = { ...countTo.defaults, ...options };
      settings.from = element.dataset.from || settings.from;
      settings.to = element.dataset.to || settings.to;
      settings.speed = element.dataset.speed || settings.speed;
      settings.refreshInterval =
        element.dataset.refreshInterval || settings.refreshInterval;
      settings.decimals = element.dataset.decimals || settings.decimals;

      let loops = Math.ceil(settings.speed / settings.refreshInterval);
      let increment = (settings.to - settings.from) / loops;
      let loopCount = 0;
      let value = settings.from;

      const intervalId = setInterval(updateTimer, settings.refreshInterval);
      element.dataset.countToInterval = intervalId;

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate === "function") {
          settings.onUpdate.call(element, value);
        }

        if (loopCount >= loops) {
          clearInterval(intervalId);
          delete element.dataset.countToInterval;
          value = settings.to;

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(element, value);
          }
        }
      }

      function render(value) {
        const formattedValue = settings.formatter(value, settings);
        element.innerHTML = formattedValue;
      }
    };

    countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1000,
      refreshInterval: 100,
      decimals: 0,
      formatter: (value, settings) => value.toFixed(settings.decimals),
      onUpdate: null,
      onComplete: null,
    };

    const counterElements = document.querySelectorAll(".count-number");

    counterElements.forEach((element) => {
      const options = {
        formatter: (value, options) =>
          value
            .toFixed(options.decimals)
            .replace(/\B(?=(?:\d{3})+(?!\d))/g, ","),
      };

      countTo(element, options);
    });
  }, []);

  return (
    <section className="pt-0 my-5 border-white border">
      <div className="container mb-5 border-white border">
        <div className="row row-cols-2 row-cols-lg-4 g-4 my-5">
          {/* Item */}
          <div className="col">
            <div className="d-flex align-items-center">
              {/* Icon */}
              <div className="icon-lg bg-dark rounded text-white flex-shrink-0">
                {" "}
                <i className="bi bi-briefcase fs-5" />{" "}
              </div>
              {/* Content */}
              <div className="ms-3">
                <div className="d-flex">
                  <h4
                    className="timer count-title count-number fw-bold"
                    data-to={500}
                    data-speed={2000}
                    style={{ color: "#1e293b" }}
                  />
                  <span className="h4 mb-0 fw-bold" id="green-text">
                    +
                  </span>
                </div>
                <p className="mb-0 text-secondary">Total Jobs</p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="col">
            <div className="col">
              <div className="d-flex align-items-center">
                {/* Icon */}
                <div className="icon-lg bg-dark rounded text-white flex-shrink-0">
                  {" "}
                  <i className="bi bi-buildings fs-5" />{" "}
                </div>
                {/* Content */}
                <div className="ms-3">
                  <h4
                    className="timer count-title count-number fw-bold"
                    data-to={5468}
                    data-speed={2000}
                    style={{ color: "#1e293b" }}
                  />
                  <p className="mb-0 text-secondary">Total Companies</p>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="col">
            <div className="col">
              <div className="d-flex align-items-center">
                {/* Icon */}
                <div className="icon-lg bg-dark rounded text-white flex-shrink-0">
                  {" "}
                  <i className="bi bi-people fs-5" />{" "}
                </div>
                {/* Content */}
                <div className="ms-3">
                  <div className="d-flex">
                    <h4
                      className="timer count-title count-number fw-bold"
                      data-to={20}
                      data-speed={2000}
                      style={{ color: "#1e293b" }}
                    />
                    <span className="h4 mb-0 fw-bold" id="green-text">
                      K+
                    </span>
                  </div>
                  <p className="mb-0 text-secondary">Total Candidates</p>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="col">
            <div className="col">
              <div className="d-flex align-items-center">
                {/* Icon */}
                <div className="icon-lg bg-dark rounded text-white flex-shrink-0">
                  {" "}
                  <i className="bi bi-briefcase fs-5" />{" "}
                </div>
                {/* Content */}
                <div className="ms-3">
                  <div className="d-flex">
                    <h4
                      className="timer count-title count-number fw-bold"
                      data-to={100}
                      data-speed={2000}
                      style={{ color: "#1e293b" }}
                    />
                    <span className="h4 mb-0 fw-bold" id="green-text">
                      +
                    </span>
                  </div>
                  <p className="mb-0 text-secondary">New Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
