import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="text-light bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h2>Appointment System</h2>
            <p>Generate outside-the-box thinking with the possibility to target the low.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Community</a></li>
              <li><a href="#" className="text-light">Events</a></li>
              <li><a href="#" className="text-light">Help Center</a></li>
              <li><a href="#" className="text-light">Partners</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Get Email Notifications</h5>
            <p>Generate outside-the-box thinking with the possibility to target the low.</p>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter Email..." />
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-light" />
      <div className="container text-center py-3">
        <p className="mb-0">© 2025 Ashish Verma. All Rights Reserved.</p>
        <div className="d-flex justify-content-center mt-2">
          <a href="#" className="text-light mx-2"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;