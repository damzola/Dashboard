import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";
import Pagination from "react-bootstrap/Pagination";

export default function Report() {
  const report = [
    { data: "$2.5k", value: "Total Sales" },
    { data: 20, value: "Active Orders" },
    { data: 15, value: "New User" },
    { data: "$1.5k", value: "Revenue" },
  ];
  const sales = [
    { name: "Week 1", uv: 3490, pv: 2000, amt: 2100 },
    { name: "Week 2", uv: 3490, pv: 5000, amt: 2100 },
    { name: "Week 3", uv: 3490, pv: 3000, amt: 2100 },
    { name: "Week 4", uv: 3490, pv: 1000, amt: 2100 },
  ];
  const revenue = [
    { name: "week 1", value: 40 },
    { name: "week 2", value: 80 },
    { name: "week 3", value: 60 },
    { name: "week 4", value: 20 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  // PAGINATION
  let active = 1;
  let value = [];
  for (let number = 1; number <= 5; number++) {
    value.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <div className="d-flex justify-content-between shadow-sm p-2 mb-3">
        <div>
          <h5>Reports</h5>
        </div>
        <div>
          <form className="form">
            <select className=" form-select">
              <option value="Last 30days">Last 30 days</option>
              <option value="Last 60days">Last 60 days </option>
            </select>
          </form>
        </div>
      </div>

      <div className="row scroll-bar mb-3">
        {report.map((item, id) => (
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

      {/* REPORT CHART  */}

      <div className="row mb-3">
        <div className="col-lg-6 col-md-6 ">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h5 className="text-start mb-3">Revenue Chart</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={400}
                height={400}
                data={sales}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 ">
          <div className="bg-white p-3 rounded-4 shadow-sm">
            <h5 className="text-start mb-3">Number of Sales</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart width={400} height={400}>
                <Pie
                  data={revenue}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  nameKey="name"
                  paddingAngle={5}
                >
                  {revenue.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
                <CartesianGrid />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="d-flex justify-content-between bg-light shado p-2">
          <form className="form">
            <input
              className=" form-control"
              type="search"
              placeholder="search"
            />
          </form>
          <div>
            <form className="form">
              <select className=" form-select form-control">
                <option value="Export">Export</option>
                <option value="Download">Download</option>
                <option value="Share">Share</option>
              </select>
            </form>
          </div>
        </div>

        <div className=" table-responsive">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Deo</td>
                <td>Purchased</td>
                <td>Complete</td>
                <td>20/06/25</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>John Mook</td>
                <td>Purchased</td>
                <td>Pending</td>
                <td>20/06/25</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Mike Deo</td>
                <td>Login</td>
                <td>Complete</td>
                <td>20/06/25</td>
                <td>null</td>
              </tr>
              <tr>
                <td>Jos Miller</td>
                <td>View Page</td>
                <td>Failed</td>
                <td>19/06/25</td>
                <td>null</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end pagination">
          <Pagination.Prev />
          <Pagination>{value}</Pagination>
          <Pagination.Next />
        </div>
      </div>
    </div>
  );
}
