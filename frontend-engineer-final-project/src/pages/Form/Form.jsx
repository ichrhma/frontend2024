import React from "react";
import { Image2 } from "../../assets/index";
import "./Form.css";

const Form = () => {
  return (
    <section id="form" className="abu">
      <div className="wrapper">
        <img src={Image2} alt="" className="form-image" />
        <div className="form-content">
          <h2>Form Covid</h2>
          <div className="form-input">
            <label>Provinsi</label>
            <input type="text" id="provinsii" />
            <label>Status</label>
            <input type="text" id="status" />
            <label>Jumlah</label>
            <input type="number" id="jumlah" />
            <a href="#" className="form-btn">
              Submit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
