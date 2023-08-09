import React, { useState } from "react";
import Barchart from "./charts/Barchart";
import Card from "./Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CardGraph = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="row col-12 d-flex">
      <h5 className="text-align-start">Update Statistics</h5>
      <div className="row col-4">
        <div className="row mt-6">
          <div className="form-group text-start ms-2">
            <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
              Pick Date Range
            </h6>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
            />
            <button className="btn btn-primary ms-3 mb-2">Filter</button>
          </div>
        </div>
        <div className="col-12 d-flex">
          <Card />
          <Card />
        </div>
        <div className="col-12 d-flex">
          <Card />
          <Card />
        </div>
      </div>
      <div className="row col-8 mt-5">
        <Barchart />
      </div>
    </div>
  );
};

export default CardGraph;
