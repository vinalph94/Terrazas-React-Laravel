import React from "react";

function AmenitiesManagerCRUD() {
  return (
    <div className="profile-container">
      <style type="text/css">
        {`
              .profile-container {
                  padding: 24px;
                  margin: 24px;
                  min-height:90vh;
              }
      
              .container {
                  display: flex;
                  flex-wrap: wrap;
              }
      
              .box {
                  display: inline-block;
                  margin: 10px;
              }
              `}
      </style>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Manager Name</th>
                <th>Ammenitie</th>
                <th>Email Id</th>
                <th>Modify</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={require("../../static/images/avatar.jpg")}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Tom Cruise</div>
                      <div className="text-sm opacity-50">Keller Street</div>
                    </div>
                  </div>
                </td>
                <td>
                  Garden
                  <br />
                </td>
                <td>mcruise@terrazas.com</td>
                <th>
                  <button className="btn btn-ghost btn-xs btn-outline btn-error">
                    Remove
                  </button>
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={require("../../static/images/avatar.jpg")}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Eminem</div>
                      <div className="text-sm opacity-50">Arlington</div>
                    </div>
                  </div>
                </td>
                <td>
                  Swimming Pool
                  <br />
                </td>
                <td>meminem@terrazas.com</td>
                <th>
                  <button className="btn btn-ghost btn-xs btn-outline btn-error">
                    Remove
                  </button>
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={require("../../static/images/avatar.jpg")}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Urvashi Rautela</div>
                      <div className="text-sm opacity-50">Austin</div>
                    </div>
                  </div>
                </td>
                <td>
                  Tennies Court
                  <br />
                </td>
                <td>murvashi@terrazas.com</td>
                <th>
                  <button className="btn btn-ghost btn-xs btn-outline btn-error">
                    Remove
                  </button>
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={require("../../static/images/avatar.jpg")}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Sachin</div>
                      <div className="text-sm opacity-50">Dallas</div>
                    </div>
                  </div>
                </td>
                <td>
                  Garden
                  <br />
                </td>
                <td>msachin@terrazas.com</td>
                <th>
                  <button className="btn btn-ghost btn-xs btn-outline btn-error">
                    Remove
                  </button>
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={require("../../static/images/avatar.jpg")}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Atif Aslam</div>
                      <div className="text-sm opacity-50">Fortworth</div>
                    </div>
                  </div>
                </td>
                <td>
                  Swimming Pool
                  <br />
                </td>
                <td>maslam@terrazas.com</td>
                <th>
                  <button className="btn btn-ghost btn-xs btn-outline btn-error">
                    Remove
                  </button>
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={require("../../static/images/avatar.jpg")}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Ginger Dick</div>
                      <div className="text-sm opacity-50">Houston</div>
                    </div>
                  </div>
                </td>
                <td>
                  Security
                  <br />
                </td>
                <td>mginger@terrazas.com</td>
                <th>
                  <button className="btn btn-ghost btn-xs btn-outline btn-error">
                    Remove
                  </button>
                </th>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th></th>
                <th>Manager Name</th>
                <th>Ammenitie</th>
                <th>Email Id</th>
                <th>Modify</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AmenitiesManagerCRUD;
