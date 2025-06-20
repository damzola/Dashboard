import React from "react";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Cell,
  Legend,
  PieChart,
  Pie,
} from "recharts";
import Pagination from "react-bootstrap/Pagination";

export default function Users() {
  const user = [
    { data: 3000, value: "Total Users" },
    { data: 2000, value: "Active Users" },
    { data: 30, value: "Suspended Users" },
    { data: 40, value: "Pending Users" },
  ];
  const usersList = [
    { id: 1, name: "John Deo", email: "john@test.com", role: "user" },
    { id: 2, name: "John Deo", email: "john@test.com", role: "instructor" },
    { id: 3, name: "John Deo", email: "john@test.com", role: "user" },
    { id: 4, name: "John Deo", email: "john@test.com", role: "guest" },
    { id: 5, name: "John Deo", email: "john@test.com", role: "user" },
  ];
  const usersPerformance = [
    { name: "Mon", value: 30, users: 2000, guest: 3000, instruct: 1200 },
    { name: "Tue", value: 30, users: 2500, guest: 1000, instruct: 1500 },
    { name: "Wed", value: 30, users: 2000, guest: 3500, instruct: 2300 },
    { name: "Thur", value: 30, users: 1000, guest: 2600, instruct: 2500 },
    { name: "Fri", value: 30, users: 4000, guest: 1000, instruct: 3050 },
    { name: "Sat", value: 30, users: 4400, guest: 900, instruct: 2050 },
    { name: "Sun", value: 30, users: 4700, guest: 1200, instruct: 4050 },
  ];
  const dailyVisit = [
    { value: "guest", data: 100 },
    { value: "user", data: 1000 },
    { value: "instruct", data: 400 },
  ];
  const COLORS = ["#b91d47", "#00aba9", "#2b5797"];
  // PAGINAION
  let value = 1;
  let data = [];
  for (let counts = 1; counts <= 10; counts++) {
    data.push(
      <Pagination.Item key={counts} active={counts === value}>
        {counts}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <div className=" shadow p-2 mb-3 d-flex justify-content-between bg-light">
        <h3 className="text-start">Users</h3>
        <form className="form">
          <input type="date" className="border-0 form-control bg-white" />
        </form>
      </div>

      <div className="row scroll-bar ">
        {user.map((item, id) => (
          <div
            key={id}
            className="col-lg-3 col-md-3 col-sm-4 module-scroll-bar rounded-4 shadow-sm mb-3"
          >
            <div className="p-3 text-center rounded-4 shadow-sm bg-white h-100">
              <h3 className="mb-1">{item.data}</h3>
              <p className="text-muted">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-light mb-3">
        <div className=" table-responsive">
          <h5 className="text-start mb-3">Users List</h5>

          <table className=" table table-hover ">
            <thead className=" table-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((index, id) => (
                <tr key={id}>
                  <td>{index.id}</td>
                  <td>{index.name}</td>
                  <td>{index.email}</td>
                  <td>{index.role}</td>
                  <td>
                    <button className="btn btn-sm btn-success">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" pagination justify-content-center">
          <Pagination.Prev />
          <Pagination>{data}</Pagination>
          <Pagination.Next />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-lg-6 col-md-6">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h5 className="text-start mb-3">Page Performace Chart</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={400}
                height={400}
                data={usersPerformance}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                {/* <YAxis dataKey="value"/> */}
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#ff7300"
                  yAxisId={0}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="guest"
                  stroke="#387908"
                  yAxisId={1}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="instruct"
                  stroke="#f4c542"
                  yAxisId={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h5 className="text-start mb-3">Daily Visit Chart</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="data"
                  nameKey="value"
                  isAnimationActive={false}
                  data={dailyVisit}
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  label
                >
                  {dailyVisit.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
