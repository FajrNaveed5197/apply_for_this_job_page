// import image from'../img.jpeg'
import React from "react";
import "./applyPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Applypage = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row boundary">
            <div className="col-lg-4">
              <span>
                <h1 className="headingfont">Apply for this Role</h1>
                <p>
                  Send us an email or give us a call. <br />
                  We look forward to discussing your goals.
                </p>
                <h2 className="subheadfont">Contact Details</h2>
                <i class="bluecolor bi bi-telephone-fill"> &nbsp; Phone</i>
                <p>
                  051-889702
                  <br />
                  0304-0875702
                  <br />
                </p>
                <i class="bluecolor bi bi-envelope-fill">Contact HR</i>
                <p>careers@cloudtek.biz</p>
                <h2 className="subheadfont">Follow Us</h2>
                <i class="bluecolor bi bi-facebook"></i>
                <i class="bluecolor bi bi-twitter"></i>
                <i class="bluecolor bi bi-instagram"></i>
                <i class="bluecolor bi bi-linkedin"></i>
              </span>
            </div>

            <div className="col-lg-8">
              
              <div className="card text-white">
                
                <div
                  className="bluebackground card-body"
                  style={{ position: "relative" }}
                >
                  <div className="imgspecs-content">
                  <div className="imgspecs"> </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      zIndex: "10",
                      position: "absolute",
                      top: 20,
                      left: 20,
                      justifyContent: "center",
                    }}
                  >
                    <h3>Enter Details</h3>
                    <div className="col-lg-5">
                      <label for="validationCustom01" class="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustom01"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-lg-5 mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="col-lg-5  mb-4">
                      <label for="validationCustom01" class="form-label">
                        Contact Number
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="validationCustom01"
                        required
                      />
                    </div>

                    <div className="col-lg-5  mb-4">
                      <label for="validationCustom04" class="form-label">
                        Position
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option selected disabled value="">
                          Choose...
                        </option>
                        <option>WordPress</option>
                        <option>A category</option>
                        <option>B category</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <label for="validationCustom01" class="form-label">
                        Years of Experience
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="validationCustom01"
                        required
                      />
                    </div>

                    <div className="col-lg-5  mb-4">
                      <label for="validationCustom04" class="form-label">
                        Apply From
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option selected disabled value="">
                          Select the City
                        </option>
                        <option>Islamabad</option>
                        <option>Lahore</option>
                        <option>Karachi</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>

                    <div class="col-10  mb-4">
                      <label for="formFile" class="form-label">
                        Upload Resume
                      </label>
                      <input class="form-control" type="file" id="formFile" />
                    </div>

                    <div
                      class="col-12"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button class="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applypage;
