import React from "react";
import { Provider } from "./Context";
import Button from "./Button";
import Inputs from "./Inputs";

const Form = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form action="" className="form-group search-box">
            <label htmlFor="" htmlFor="customerName">
              Customer name
            </label>
            <div className="search-row">
              <Provider>
                <Inputs />
                <Button />
              </Provider>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
