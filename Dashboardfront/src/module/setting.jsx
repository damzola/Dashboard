import React from "react";

export default function Setting() {
  return (
    <div>
      <h2 className=" text-start">Settings</h2>
      <div className="mb-3 bg-light mt-3">
        <h5 className=" text-start">Profile Setting</h5>
        <form className=" form text-start">
          <div className="mt-3 mb-3 p-3">
            <label className=" form-label text-start">UserName</label>
            <input
              type="text"
              placeholder="admin"
              className=" form-control shadow-sm p-2"
            />
          </div>
          <div className="mt-3 mb-3 p-3 ">
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@test.com"
              className=" form-control shadow-sm p-2"
            />
          </div>
          <div className="mt-3 mb-3 p-3">
            <label>Password</label>
            <input
              type="password"
              placeholder="****"
              className=" form-control shadow-sm p-2"
            />
          </div>
        </form>
      </div>
      <div>
        <h5 className="text-start">Account Setting</h5>
        <form className="d-flex justify-content-between text-start">
          <div className="p-3">
            <label className="form-label text-start">Language</label>
            <select className="form-select form-control">
              <option>Select....</option>
              <option>English</option>
              <option>Yoruba</option>
            </select>
          </div>
          <div className=" form-check form-switch p-3">
            <label className="form-check-label text-start">Notification</label>
            <input
              type="checkbox"
              className=" form-check-input"
              name="darkmode"
              value="yes"
            />
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-start mt-3">
        <button className="btn btn-primary ">Save Change</button>
      </div>
    </div>
  );
}
