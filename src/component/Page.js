import React from "react";
import { Link } from "react-router-dom";

export const Page = () => {
  return (
    <>
    <div className="card text-center mb-5">
      <div className="card-header">Product</div>
      <div className="card-body">
        <h5 className="card-title">Welcome to our page</h5>
        <p className="card-text">
          Tap to see products 
        </p>
        <Link className="btn btn-primary"  to="/Home">
                  Go to Product
                </Link>
      </div>
    </div>
    <div className="card text-center">
      <div className="card-header">Cart</div>
      <div className="card-body">
        <p className="card-text">
          Tap to see your List 
        </p>
        <Link className="btn btn-primary"  to="/AddCard">
                  Go to Cart
                </Link>
      </div>
    </div>
    </>
  );
};
