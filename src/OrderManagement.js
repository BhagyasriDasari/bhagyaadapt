import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEdit,
  faCheck,
  faTimes,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import "./OrderManagement.css";

class OrderManagement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      status: "Pending",
    };
  }

  
  componentDidMount() {
    // Fetch orders from a fake REST API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
       
        const statuses = [
          "Pending",
          "Accepted",
          "AWB Created",
          "Ready to Ship",
          "Shipped",
          "Cancelled",
        ];
        const values = [100, 200, 300, 400, 500];
        const ordersWithStatus = data.map((order) => ({
          ...order,
          status: statuses[Math.floor(Math.random() * statuses.length)],
          value: values[Math.floor(Math.random() * values.length)],
        }));
        this.setState({ orders: ordersWithStatus });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  handleStatusChange = (key) => {
    this.setState({ status: key });
  };

  
  handleImportOrders = () => {
   
    alert("Import orders");
  };


  handleRefresh = () => {
    alert("Refresh");
  };


  handleActions = (order) => {
    
    alert(`Actions for order ${order.id}`);
  };

 
  render() {
    
    const filteredOrders = this.state.orders.filter(
      (order) => order.status === this.state.status
    );

    return (
      <div className="container">
        <div className="header">
          <div className="menu">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
          </div>
        <div className="content-details">
            <div className="tabs">
                <div
                    className={`tab ${this.state.status === "Dashboard" ? "active" : ""}`}
                    onClick={() => this.handleStatusChange("Dashboard")}
                >
                    Dashboard
                </div>
                
                <div
                    className={`tab ${this.state.status === "Inventory" ? "active" : ""}`}
                    onClick={() => this.handleStatusChange("Inventory")}
                >
                    Inventory
                </div>
                <div
                    className={`tab ${this.state.status === "Orders" ? "active" : ""}`}
                    onClick={() => this.handleStatusChange("Orders")}
                >
                    Orders
                </div>
                <div
                    className={`tab ${this.state.status === "Shipping" ? "active" : ""}`}
                    onClick={() => this.handleStatusChange("Shipping")}
                >
                    Shipping
                </div>
                <div
                    className={`tab ${this.state.status === "Channels" ? "active" : ""}`}
                    onClick={() => this.handleStatusChange("Channels")}
                >
                    Channels
                </div>
            </div>
            <div className="filters-container">    
                <div className="filters">
                    <div
                        className={`filter ${
                        this.state.status === "Pending" ? "active" : ""
                        }`}
                        onClick={() => this.handleStatusChange("Pending")}
                    >
                        Pending
                    </div>
                    <div
                        className={`filter ${
                        this.state.status === "Accepted" ? "active" : ""
                        }`}
                        onClick={() => this.handleStatusChange("Accepted")}
                    >
                        Accepted
                    </div>
                    <div
                        className={`filter ${
                        this.state.status === "AWB Created" ? "active" : ""
                        }`}
                        onClick={() => this.handleStatusChange("AWB Created")}
                    >
                        AWB Created
                    </div>
                    <div
                        className={`filter ${
                        this.state.status === "Ready to Ship" ? "active" : ""
                        }`}
                        onClick={() => this.handleStatusChange("Ready to Ship")}
                    >
                        Ready to Ship
                    </div>
                    <div
                        className={`filter ${
                        this.state.status === "Shipped" ? "active" : ""
                        }`}
                        onClick={() => this.handleStatusChange("Shipped")}
                    >
                        Shipped
                    </div>
                    <div
                        className={`filter ${
                        this.state.status === "Cancelled" ? "active" : ""
                        }`}
                        onClick={() => this.handleStatusChange("Cancelled")}
                    >
                        Cancelled
                    </div>
                    <div className="buttons">
                        <button onClick={this.handleImportOrders}>Import Orders</button>
                        <button onClick={this.handleRefresh}>Refresh</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Channel ID</th>
                        <th>Order No.</th>
                        <th>Order Date</th>
                        <th>City</th>
                        <th>Customer Name</th>
                        <th>Order Value</th>
                        <th>Status</th>
                        <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((order) => (
                        <tr key={order.id}>
                            <td>
                            <input type="checkbox" />
                            </td>
                            <td>{order.userId}</td>
                            <td>{order.id}</td>
                            <td>{order.title}</td>
                            <td>{order.body}</td>
                            <td>{order.userId}</td>
                            <td>{order.value}</td>
                            <td className={order.status.toLowerCase()}>{order.status}</td>
                            <td>
                            <div className="icons">
                                <FontAwesomeIcon icon={faEdit} />
                                <FontAwesomeIcon icon={faCheck} />
                                <FontAwesomeIcon icon={faTimes} />
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <span>1 / 20 PAGE</span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default OrderManagement;