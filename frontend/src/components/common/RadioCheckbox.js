import React from "react";
import "../MyPendingTask.css";

const RadioCheckbox = (props) => {
  return (
    <div>
      <input
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={(e) =>
          props.onChange({
            [props.name]: { [props.value]: e.target.checked },
          })
        }
        defaultChecked={props.currentValue === props.value}
      />
      <label
        htmlFor={props.name}
        className="custom-control-label ms-1"
        style={{ fontSize: "13px", fontWeight: "600" }}
      >
        {props.displayText}
      </label>
    </div>
  );
};

export default RadioCheckbox;
