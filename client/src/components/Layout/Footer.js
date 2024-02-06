import React from "react";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="blockcode">
      <div className="header"></div>
      <footer className="page-footer shadow">
        <div
          className="d-flex flex-column mx-auto py-5"
          style={{ width: "80%" }}
        >
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <p href="/" className="d-flex align-items-center p-0 text-dark">
                <i className="fa-solid fa-scale-unbalanced-flip"></i>
                <p className="ms-3 h5 font-weight-bold">Laxmi Enterprise</p>
              </p>
              <p className="my-3" style={{ width: 250 }}>
                Rampurhat’s one of the best weighing scale store from the house
                of Jay Barman, serving since more than 20 years.
              </p>
            </div>
            <div>
              <p className="h5 mb-4" style={{ fontWeight: 600 }}>
                Company
              </p>
              <ul
                className="p-0"
                style={{ listStyle: "none", cursor: "pointer" }}
              >
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Resources
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/about">
                    About Us
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/policy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="h5 mb-4" style={{ fontWeight: 600 }}>
                Help
              </p>
              <ul
                className="p-0"
                style={{ listStyle: "none", cursor: "pointer" }}
              >
                <li className="my-2">
                  <a className="text-dark" href="/">
                    Support
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/register">
                    Sign Up
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-dark" href="/login">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p href="/" className="d-flex align-items-center p-0 text-dark">
                <p className="ms-2 h5 font-weight-bold">Address</p>
              </p>
              <p className="my-3" style={{ width: 250 }}>
                Louts Press Gali,Kamarpatty Para,Rampurhat,Birbhum, West Bengal
                731224
              </p>
            </div>
          </div>
          <small className="text-center mt-5">
            © Laxmi Enterpeise , 2023. All rights reserved.Powered by{" "}
            <a href="https://barman9609.github.io/Abhisekh/">Abhisekh Barman</a>
          </small>
        </div>
      </footer>
    </div>
  );
};

export default footer;
