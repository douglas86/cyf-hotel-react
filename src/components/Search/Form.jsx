import React from "react";
import { Provider } from "./Context";
import Button from "./Button";
import Inputs from "./Inputs";

const Form = () => {
  return (
    <div>
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
  );
};

export default Form;
