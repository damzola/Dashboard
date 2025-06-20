import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  LineChart,
  Line,
  Legend,
} from "recharts";
export default function dashboard() {
  const Data = [
    { id: 1, value: 250, word: "Total Users" },
    { id: 2, value: "$2.5k", word: "Total Earning" },
    { id: 3, value: 90, word: "Total Order" },
    { id: 4, value: 350, word: "Total Task" },
    { id: 5, value: 200, word: "Total Success Task" },
    { id: 6, value: 40, word: "Total Pending Task" },
    { id: 6, value: 10, word: "Total Failed Task" },
  ];
  //BAR CHART GRAPH
  const value = [
    { month: "Jan", visits: 30 },
    { month: "Feb", visits: 50 },
    { month: "Mar", visits: 40 },
    { month: "Apr", visits: 70 },
    { month: "May", visits: 60 },
    { month: "Jun", visits: 100 },
    { month: "Jul", visits: 200 },
  ];

  //LINE CHART GRAPH
  const dataSet = [
    {
      name: "Jan",
      guest: 4000,
      users: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      guest: 3000,
      users: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      guest: 2000,
      users: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      guest: 2780,
      users: 3908,
      amt: 2000,
    },
    {
      name: "May",
      guest: 1890,
      users: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      guest: 2390,
      users: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      guest: 3490,
      users: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className=" container bg-white">
      {/* <h1>Here is the dashboard page</h1> */}

      <div className=" d-block d-flex gap-5 scroll-bar ">
        {Data.map((item, id) => (
          <div key={id} className="d-flex module-scroll-bar rounded-4 shadow-sm mb-3">
            <div className="justify-content-center align-content-center p-1">
              <h3>{item.value}</h3>
              <p>{item.word}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="row justify-content-center align-content-center h-100">
        <div className="col-lg-6 col-md-6 col-sm-12 bg-light shadow">
          <h5 className="text-start mb-3">Monthly Visits</h5>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={value}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="visits"
                fill="#008080"
                barSize={40}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="bg-white shadow rounded-4 p-3">
            <h5 className="text-start mb-3">Users List</h5>
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john@test.com</td>
                  <td>User</td>
                </tr>

                <tr>
                  <td>John Doe</td>
                  <td>john@test.com</td>
                  <td>User</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>john@test.com</td>
                  <td>User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="justify-content-center align-content-center h-100 row">
        <div className="col-lg-6 col-md-6 bg-light shadow mt-2 rounded-4">
          <h5 className="text-start mb-3">Add New Item</h5>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label text-start">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label text-start">User</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label text-start">List</label>
              <select className="form-select">
                <option>Select</option>
                <option>Select 1</option>
                <option>Select 2</option>
              </select>
            </div>
            <div className="col-12 w-100">
              <button type="submit" className="btn button mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="col-lg-6 col-md-6 bg-light shadow rounded-4 mt-2">
          <h5 className="text-start mb-3">Monthly Performace</h5>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={400}
              height={400}
              data={dataSet}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="guest"
                stroke="#ff7300"
                yAxisId={0}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#387908"
                yAxisId={1}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
