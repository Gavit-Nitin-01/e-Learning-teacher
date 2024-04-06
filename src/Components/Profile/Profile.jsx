import React from "react";
import "./Prifile.css";

export default function Profile() {
  return (
    <div>
      <div className="myprofile">
        <div className="text-center">
          <img src="images/Profileimg.jpg" width="150" className="rounded-circle" alt="Profile Image"/>
        </div>
        <div className="inputs">
          <div className="form-group1">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
            />
          </div>
          <br></br>
          <div className="form-group2">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="email"
            />
          </div>
          <br></br>

          <div className="form-group3">
            <label >Phone number</label>
            <input
              type="text"
              className="form-control"
              id="number"
              placeholder="phone number"
            />
          </div>
        </div>
        <button type="submit" className="savebtn">
          Save
        </button>
      </div>
    </div>
  );
}
