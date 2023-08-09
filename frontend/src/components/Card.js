import React from "react";
import { Icon } from "@iconify/react";

const Card = () => {
  return (
    <div className="card m-3 border-primary shadow" style={{ width: "45%" }}>
      <div className="card-body">
        <h6 className="card-title text-primary">Total Updates</h6>
        <hr className="text-primary" />
        <p className="card-text fs-5">250</p>
      </div>
      <div className="card-footer bg-primary bg-opacity-50">
        <Icon icon="ic:round-menu" height="1.5em" />
      </div>
    </div>

    // <div
    //   className="card text-center border-primary mb-3 ms-3"
    //   style={{ maxWidth: "18rem" }}
    // >
    //   <div className="card-header">Total Updates</div>
    //   <div className="card-body text-primary justify-content-center">
    //     <h4 className="card-title">
    //       <Icon icon="ic:round-menu" />
    //       <span> 250</span>
    //     </h4>
    //   </div>
    // </div>
  );
};

export default Card;
