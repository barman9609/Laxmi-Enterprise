import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import "../../style/order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout
      title={"Your Orders"}
      description={"Weighing scale Machine, Electronic weighing scale"}
      keyword={
        "Buy Best Weighing Scale,Weighing scale Machine, Electronic weighing scale,30kg kata , 10 kg kata , weight machine , 30 kg kata price , weight machine , weight machine price"
      }
    >
      <div className="event-schedule-area-two bg-color pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text">
                  <h2>My Orders</h2>
                </div>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          {/* row end*/}

          {orders?.map((o, i) => {
            return (
              <div className="row">
                <div className="col-lg-12">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade active show"
                      id="home"
                      role="tabpanel"
                    >
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="text-center" scope="col">
                                #
                              </th>
                              <th scope="col">Product</th>
                              <th scope="col">Address</th>
                              <th scope="col">Phone</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="inner-box">
                              <th scope="row">
                                <div className="event-date">
                                  <span>{i + 1}</span>
                                </div>
                              </th>
                              {o?.products?.map((p, i) => (
                                <div>
                                  <td>
                                    <div className="event-img">
                                      <img
                                        src={`/api/v1/product/product-photo/${p._id}`}
                                        alt
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="event-wrap">
                                      <h3>{p.name}</h3>
                                      <div className="meta">
                                        <div className="organizers">
                                          <p>
                                            {p.description.substring(0, 30)}
                                          </p>
                                        </div>
                                        <div class="time">
                                          <span>
                                            {" "}
                                            <b>₹{p.price}</b>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </div>
                              ))}
                              <td>
                                <div className="r-no">
                                  <span>{o?.buyer?.address}</span>
                                </div>
                              </td>
                              <td>
                                <div className="r-no">
                                  <span>{o?.buyer?.phone}</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
