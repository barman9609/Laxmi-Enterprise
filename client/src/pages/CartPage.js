import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { token } from "morgan";
import "../style/cartpage1.css";
import { Radio } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart([]);
  const navigate = useNavigate();
  //Total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {}
  };
  //remove item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {}
  };
  //for place order
  const placeorder = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/order", {
        cart,
      });
      localStorage.removeItem("cart");
      setCart([]);
      toast.success("Order Place Successfully");
    } catch (error) {}
  };

  return (
    <Layout
      title={"Cart Page - Laxmi Enterprise"}
      description={"Weighing scale Machine, Electronic weighing scale"}
      keyword={
        "Buy Best Weighing Scale,Weighing scale Machine, Electronic weighing scale,30kg kata , 10 kg kata , weight machine , 30 kg kata price , weight machine , weight machine price"
      }
    >
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>Shopping Cart</h2>
              <p>
                <b> {`Hello  ${auth?.token && auth?.user?.name}`} </b>
              </p>
              <p>
                {cart?.length >= 1
                  ? `You Have ${cart.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout"
                    } `
                  : "Your cart in empty"}
              </p>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    <div className="product">
                      {cart?.map((p) => (
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              className="img-fluid mx-auto d-block image"
                              src={`/api/v1/product/product-photo/${p._id}`}
                              alt={p.name}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="info">
                              <div className="row">
                                <div className="col-md-5 product-name">
                                  <div className="product-name">
                                    <p>{p.name}</p>
                                    <div className="product-info">
                                      <div>
                                        <p className="value">
                                          {p.description.substring(0, 30)}
                                        </p>
                                      </div>
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => removeCartItem(p._id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 quantity">
                                  <label htmlFor="quantity">Quantity:</label>
                                  <input
                                    id="quantity"
                                    type="number"
                                    defaultValue={1}
                                    className="form-control quantity-input"
                                  />
                                </div>
                                <div className="col-md-3 price">
                                  <span>Price : ₹{p.price}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    {auth?.user?.address ? (
                      <>
                        <div>
                          <h3>Current address</h3>
                          <h6 className="text-center">
                            {" "}
                            {auth?.user?.address}{" "}
                          </h6>
                          <div className="text-center">
                            <button
                              type="button"
                              className="btn btn-success   btn-block"
                              onClick={() =>
                                navigate("/dashboard/user/profile")
                              }
                            >
                              Update Address
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center">
                        {auth?.token ? (
                          <button
                            type="button"
                            className="btn btn-primary  btn-block"
                            onClick={() => navigate("/dashboard/user/profile")}
                          >
                            Update Address
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-success  btn-block"
                            onClick={() => navigate("/login")}
                          >
                            Please Login to Checkout
                          </button>
                        )}
                      </div>
                    )}
                    <div className="p-5">
                      <h3>Select a payment method</h3>
                      <div className="d-flex  text-center">
                        <Radio.Group>
                          <Radio>Cash on Delivery</Radio>
                        </Radio.Group>
                      </div>
                    </div>
                    <h3>Summary</h3>
                    <div className="summary-item">
                      <span className="text">Subtotal</span>
                      <span className="price">{totalPrice()}</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Shipping</span>
                      <span className="price">₹0</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Total</span>
                      <span className="price">
                        <b>{totalPrice()}</b>
                      </span>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-success btn-lg btn-block"
                        onClick={placeorder}
                        disabled={cart.length === 0 || !auth?.user?.address}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
