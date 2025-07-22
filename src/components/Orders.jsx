import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../App";
import { useFetcher } from "react-router-dom";
import "./Orders.css"
export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [limit,setLimit]= useState(3)
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState("Pending");
  const { user } = useContext(AppContext);
  const API_URL = import.meta.env.VITE_API_URL;
  const fetchOrders = async () => {
    try {
      const url = `${API_URL}/api/orders/?page=${page}&limit=${limit}&status=${status}`;
      const result = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrders(result.data.orders);
      setTotalPages(result.data.total);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [status]);
  const updateOrder = async (status, id) => {
    try {
      const url = `${API_URL}/api/orders/${id}`;
      const result = await axios.patch(url, { status });
      fetchOrders();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
  <div className="Orders-Container">
    <h2>Order Management</h2>
    <div className="Orders-Filter">
      <select defaultValue="Pending" onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>

    <ul className="Order-List">
      {orders &&
        orders.map((order) => (
          <li key={order._id} className="Order-Item">
            <span className="Order-Info">
              {order._id} - ₹{order.orderValue} - {order.status}
            </span>
            {order.status === "Pending" && (
              <div className="Order-Actions">
                <button
                  className="cancel"
                  onClick={() => updateOrder("cancelled", order._id)}
                >
                  Cancel
                </button>
                <button
                  className="complete"
                  onClick={() => updateOrder("completed", order._id)}
                >
                  Complete
                </button>
              </div>
            )}
          </li>
        ))}
    </ul>
  </div>
);

}