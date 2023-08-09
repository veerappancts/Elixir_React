import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MyPendingTask.css";
import Editor from "./ckeditor/Editor";
import RadioCheckbox from "./common/RadioCheckbox";

const MyPendingTask = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editorData, setEditorData] = useState("");

  const [currentValues, setCurrentValues] = useState({
    // {"Question1":{"option1":false,"option2":true},"radio-item-1":{"off":true}}
  });

  const handleRadioChange = (value) => {
    let key = "";
    Object.keys(value).map((itm) => {
      key = itm;
    });

    setCurrentValues((prevState) => {
      return { ...prevState, [key]: { ...value[key] } };
    });
  };

  const handleCheckboxChange = (value) => {
    let key = "";
    Object.keys(value).map((itm) => {
      key = itm;
    });

    setCurrentValues((prevState) => {
      return { ...prevState, [key]: { ...prevState[key], ...value[key] } };
    });
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="ms-3 me-1">
      {/* <div className="mt-2 text-start">
        <h3>My Task</h3>
      </div> */}
      <div className="mt-2 mb-2 text-start main-content d-flex">
        <div
          className="col-3"
          style={{ borderRight: "1px solid #e6eef1", maxWidth: "210px" }}
        >
          <div className="col-lg-12 pl-2 pr-2 pt-2 mb-2">
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
          </div>

          <div
            className="dropdown-divider"
            style={{ border: "1px solid #e6eef1" }}
          ></div>

          <div
            className="ms-1"
            id="updates_list"
            style={{ borderBottom: "1px solid #e6eef1" }}
          >
            <div
              className="aside-link"
              data-value="{{ up.update_id }}"
              //   onClick="show_details(this)"
            >
              <div className="col">
                <div className="row">
                  <div className="col-lg-4">
                    {/* {% if up.timestamp|slice:"3:5" == "01" %} */}
                    <span style={{ fontSize: "50%", fontWeight: "600" }}>
                      January
                    </span>
                    {/* {% elif up.timestamp|slice:"3:5" == "02" %}
                                <span style="font-size:50%; font-weight: 600">February</span>
                                {% elif up.timestamp|slice:"3:5" == "03" %}
                                <span style="font-size:50%; font-weight: 600">March</span>
                                {% elif up.timestamp|slice:"3:5" == "04" %}
                                <span style="font-size:50%; font-weight: 600">April</span>
                                {% elif up.timestamp|slice:"3:5" == "05" %}
                                <span style="font-size:50%; font-weight: 600">May</span>
                                {% elif up.timestamp|slice:"3:5" == "06" %}
                                <span style="font-size:50%; font-weight: 600">June</span>
                                {% elif up.timestamp|slice:"3:5" == "07" %}
                                <span style="font-size:50%; font-weight: 600">July</span>
                                {% elif up.timestamp|slice:"3:5" == "08" %}
                                <span style="font-size:50%; font-weight: 600">August</span>
                                {% elif up.timestamp|slice:"3:5" == "09" %}
                                <span style="font-size:50%; font-weight: 600">September</span>
                                {% elif up.timestamp|slice:"3:5" == "10" %}
                                <span style="font-size:50%; font-weight: 600">October</span>
                                {% elif up.timestamp|slice:"3:5" == "11" %}
                                <span style="font-size:50%; font-weight: 600">November</span>
                                {% else %}
                                <span style="font-size:50%; font-weight: 600">December</span>
                                {% endif %} */}
                  </div>
                  <div className="col-lg-8">
                    <span style={{ fontSize: "50%", fontWeight: "600" }}>
                      Update {1}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <label style={{ fontSize: "55%" }}>Sample</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <span style={{ fontSize: "50%", fontWeight: "600" }}>
                      Status
                    </span>
                  </div>
                  <div className="col-lg-8">
                    {/* {% if up.ack_status == "NA"%} */}
                    <span style={{ fontSize: "50%", color: "red" }}>
                      Pending
                    </span>
                    {/* {% else %}
                                <span style="font-size:50%; color: green">Acknowledged</span>
                                {% endif %} */}
                  </div>
                </div>
              </div>

              <div className="dropdown-divider"></div>
            </div>
          </div>
        </div>

        {/* Main updates / PKT's */}
        <div className="row col ms-2">
          {/* <div id="loading">
                <img src="{% static 'images/4105180.gif' %}" className="ajax-loader"/>
            </div> */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="row mb-2 ml-1 mr-1 p-2"
                id="ack_deadline_text"
                style={{
                  backgroundColor: "#FFFDE7",
                  borderRadius: "0.2rem",
                  alignContent: "center",
                  display: "none",
                }}
              >
                <div className="col-lg-12 pt-2 pb-1">
                  <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                    Update Expired
                  </h1>
                  <h1 style={{ fontSize: "16px", fontWeight: "600" }}>
                    Your update acknowledgement deadline is passed, Please
                    contact the sender of this Update
                  </h1>
                </div>
              </div>

              <div
                className="row mb-2 ml-1 mr-1 p-2"
                id="max_attempt_text"
                style={{
                  backgroundColor: "#ECEFF1",
                  borderRadius: "0.2rem",
                  alignContent: "center",
                  display: "none",
                }}
              >
                <div className="col-lg-12 pt-2 pb-1">
                  <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                    0 Attempts Left
                  </h1>
                  <h1 style={{ fontSize: "16px", fontWeight: "600" }}>
                    You have reached your maximum Knowledge test attempt limit,
                    Please contact the sender of this Update
                  </h1>
                </div>
              </div>

              <div className="ms-2 me-3">
                <div
                  className="row pt-2"
                  style={{ backgroundColor: "#E8F5E9" }}
                >
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Update ID
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-4"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_id"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>
                </div>

                <div
                  className="row pt-2"
                  style={{ backgroundColor: "#F1F8E9" }}
                >
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "12px", fontWeight: "600" }}>
                      Title:{" "}
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-10"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_title"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>
                </div>

                <div
                  className="row pt-2"
                  style={{ backgroundColor: "#F9FBE7" }}
                >
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Update Source
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_source"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>

                  <div className="task-head col-lg-2"></div>

                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Update Type
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_type"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>
                </div>

                <div
                  className="row pt-2"
                  style={{ backgroundColor: "#FFFDE7" }}
                >
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Sender
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_sender"
                      style={{ fontSize: "11px", fontWeight: "600" }}
                    ></h6>
                  </div>

                  <div className="task-head col-lg-2"></div>

                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Sub Process
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_sbprocess"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>
                </div>

                <div
                  className="row pt-2"
                  style={{ backgroundColor: "#FFF8E1" }}
                >
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Initiated On
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_timestamp"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>

                  <div className="task-head col-lg-2"></div>

                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Acknowledge Before
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_lastdate"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>
                </div>

                <div
                  className="row pt-2"
                  style={{ backgroundColor: "#FFF3E0" }}
                >
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Questions Count
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="q_count"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>

                  <div className="task-head col-lg-2"></div>

                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Your Acknowledgement
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="u_ack"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>
                </div>
              </div>

              <div
                className="mt-1 me-1"
                style={{
                  backgroundColor: "#E8EAF7",
                  borderRadius: "0.25rem",
                }}
              >
                <div className="col-lg-12 mt-2" id="div_update_message">
                  <Editor
                    name="description"
                    onChange={(data) => {
                      setEditorData(data);
                    }}
                    editorLoaded={editorLoaded}
                    isDisabled={false}
                  />
                </div>
              </div>

              <div
                id="ack_text"
                className=" mt-3 mb-1 ml-1 mr-1 pl-2 pr-2 pt-1 pb-1"
                style={{
                  backgroundColor: "#E8F5E9",
                  borderRadius: "0.25rem",
                }}
              >
                <div
                  className="row mt-1"
                  style={{
                    alignContent: "center",
                  }}
                >
                  <div className="col-lg-12">
                    <h6 style={{ fontSize: "13px", fontWeight: "600" }}>
                      Please check the "I Acknowledge" option if you understood
                      the update and "I need Clarification" if you don't.
                    </h6>
                  </div>
                </div>

                <div
                  className="row ms-1"
                  style={{
                    alignContent: "center",
                  }}
                >
                  <RadioCheckbox
                    name="radio-item-1"
                    value="on"
                    type="radio"
                    onChange={handleRadioChange}
                    currentValue={currentValues}
                    displayText="I Acknowledge"
                  />
                  <RadioCheckbox
                    name="radio-item-1"
                    value="off"
                    type="radio"
                    onChange={handleRadioChange}
                    currentValue={currentValues}
                    displayText="I need Clarification"
                  />
                  {/* <div>
                    <input
                      name="radio-item-1"
                      value="on"
                      type="checkbox"
                      onChange={(e) => setCurrentValues(e.target.value)}
                      defaultChecked={currentValues === "on"}
                    />
                    <label
                      htmlFor="radio-item-1"
                      className="custom-control-label ms-1"
                      style={{ fontSize: "13px", fontWeight: "600" }}
                    >
                      I Acknowledge
                    </label>
                  </div> */}
                  {/* <div>
                    <input
                      name="radio-item-1"
                      value="off"
                      type="radio"
                      onChange={(e) => setCurrentValues(e.target.value)}
                      defaultChecked={currentValues === "off"}
                    />
                    <label
                      htmlFor="radio-item-2"
                      className="custom-control-label ms-1"
                      style={{ fontSize: "13px", fontWeight: "600" }}
                    >
                      I need Clarification
                    </label>
                  </div> */}
                  {/* <div className="form-group col-lg-5 ms-2">
                    <div className="custom-control">
                      <input
                        type="radio"
                        name="ack_yes"
                        className="custom-control-input"
                        id="ack_yes"
                        checked={acknowledgeYesChecked}
                        onChange={handleAcknowledgeYes}
                      />
                      <label
                        className="custom-control-label ms-1"
                        style={{ fontSize: "13px", fontWeight: "600" }}
                        for="ack_yes"
                      >
                        I Acknowledge
                      </label>
                    </div>

                    <div className="custom-control">
                      <input
                        type="radio"
                        name="ack_no"
                        className="custom-control-input"
                        id="ack_no"
                      />
                      <label
                        className="custom-control-label ms-1"
                        style={{ fontSize: "13px", fontWeight: "600" }}
                        for="ack_no"
                      >
                        I need Clarification
                      </label>
                    </div>
                  </div> */}
                </div>
              </div>

              <div
                id="ack_comment"
                className="mt-1 mb-3 ml-1 mr-1 pl-2 pr-2 pt-1 pb-1"
                style={{
                  backgroundColor: "#E8F5E9",
                  borderRadius: "0.25rem",
                }}
              >
                <div className="form-group" align="left">
                  <label
                    htmlFor="ack_description"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Comments
                  </label>
                  <textarea
                    className="form-control"
                    id="ack_description"
                    maxLength="100"
                    rows="2"
                  ></textarea>
                  <label id="count" style={{ fontSize: "12px" }}></label>
                </div>
              </div>

              {/* <div id="pkt"> */}
              <div className="ms-2 me-3">
                <div
                  className="row pt-2"
                  style={{ backgroundColor: "#FFF3E0" }}
                >
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Knowledge Test ID
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="kc_id"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>

                  <div className="task-head col-lg-2"></div>

                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Passing Score
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="kc_pass_score"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>
                </div>

                <div
                  className="row pt-2"
                  style={{ backgroundColor: "#FFF8E1" }}
                >
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Questions Count
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="kc_q_count"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>

                  <div className="task-head col-lg-2"></div>

                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "left" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                      Your Score
                    </h6>
                  </div>
                  <div
                    className="task-head col-lg-1"
                    style={{ textAlign: "right" }}
                  >
                    <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                  </div>

                  <div
                    className="task-head col-lg-3"
                    style={{ textAlign: "left" }}
                  >
                    <h6
                      id="kc_score"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    ></h6>
                  </div>
                </div>
              </div>

              {/* <div id="pkt_list"></div>
              </div> */}

              <div
                className="row mb-5 mt-3"
                id="ack_btn"
                style={{ alignContent: "center" }}
              >
                <div className="col-lg-12" align="center">
                  <a
                    href="#"
                    id="submit_ack"
                    className="btn btn-sm btn-labeled-center btn-primary pl-5 pr-5"
                  >
                    <span className="btn-text">Submit</span>
                  </a>
                </div>
              </div>

              <div className="ms-2 me-3">
                <div
                  className="row mb-2 ml-1 mr-1 p-2"
                  id="kc_deadline_text"
                  style={{
                    backgroundColor: "#FFFDE7",
                    borderRadius: "0.2rem",
                    alignContent: "center",
                    display: "none",
                  }}
                >
                  <div className="col-lg-12 pt-2 pb-1">
                    <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                      Knowledge Test Expired
                    </h1>
                    <h1 style={{ fontSize: "16px", fontWeight: "600" }}>
                      Your test submission deadline is passed, Please contact
                      the sender of this Update
                    </h1>
                  </div>
                </div>

                <div
                  className="row mb-2 ml-1 mr-1 p-2"
                  id="max_attempt_text"
                  style={{
                    backgroundColor: "#ECEFF1",
                    borderRadius: "0.2rem",
                    alignContent: "center",
                    display: "none",
                  }}
                >
                  <div className="col-lg-12 pt-2 pb-1">
                    <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
                      0 Attempts Left
                    </h1>
                    <h1 style={{ fontSize: "16px", fontWeight: "600" }}>
                      You have reached your maximum Knowledge test attempt
                      limit, Please contact the sender of this Update
                    </h1>
                  </div>
                </div>

                <div className="ml-3 mr-3">
                  <div
                    className="row pt-2"
                    style={{ backgroundColor: "#E8F5E9" }}
                  >
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "left" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                        Knowledge Test ID
                      </h6>
                    </div>
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "right" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                    </div>

                    <div
                      className="task-head col-lg-3"
                      style={{ textAlign: "left" }}
                    >
                      <h6
                        id="kc_id"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      ></h6>
                    </div>

                    <div className="task-head col-lg-2"></div>

                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "left" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                        Questions Count
                      </h6>
                    </div>
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "right" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                    </div>

                    <div
                      className="task-head col-lg-3"
                      style={{ textAlign: "left" }}
                    >
                      <h6
                        id="q_count"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      ></h6>
                    </div>
                  </div>

                  <div
                    className="row pt-2"
                    style={{ backgroundColor: "#F1F8E9" }}
                  >
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "left" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                        Sender
                      </h6>
                    </div>
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "right" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                    </div>

                    <div
                      className="task-head col-lg-3"
                      style={{ textAlign: "left" }}
                    >
                      <h6
                        id="kc_sender"
                        style={{ fontSize: "11px", fontWeight: "600" }}
                      ></h6>
                    </div>

                    <div className="task-head col-lg-2"></div>

                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "left" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                        Sub Process
                      </h6>
                    </div>
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "right" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                    </div>

                    <div
                      className="task-head col-lg-3"
                      style={{ textAlign: "left" }}
                    >
                      <h6
                        id="kc_sbprocess"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      ></h6>
                    </div>
                  </div>

                  <div
                    className="row pt-2"
                    style={{ backgroundColor: "#F9FBE7" }}
                  >
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "left" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                        Initiated On
                      </h6>
                    </div>
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "right" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                    </div>

                    <div
                      className="task-head col-lg-3"
                      style={{ textAlign: "left" }}
                    >
                      <h6
                        id="kc_timestamp"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      ></h6>
                    </div>

                    <div className="task-head col-lg-2"></div>

                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "left" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                        Acknowledge Before
                      </h6>
                    </div>
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "right" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                    </div>

                    <div
                      className="task-head col-lg-3"
                      style={{ textAlign: "left" }}
                    >
                      <h6
                        id="kc_lastdate"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      ></h6>
                    </div>
                  </div>

                  <div
                    className="row pt-2"
                    style={{ backgroundColor: "#FFFDE7" }}
                  >
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "left" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                        Passing Score
                      </h6>
                    </div>
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "right" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                    </div>

                    <div
                      className="task-head col-lg-3"
                      style={{ textAlign: "left" }}
                    >
                      <h6
                        id="kc_pass_score"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      ></h6>
                    </div>

                    <div className="task-head col-lg-2"></div>

                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "left" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>
                        Your Score
                      </h6>
                    </div>
                    <div
                      className="task-head col-lg-1"
                      style={{ textAlign: "right" }}
                    >
                      <h6 style={{ fontSize: "11px", fontWeight: "600" }}>:</h6>
                    </div>

                    <div
                      className="task-head col-lg-3"
                      style={{ textAlign: "left" }}
                    >
                      <h6
                        id="kc_score"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      ></h6>
                    </div>
                  </div>
                </div>

                {/* <div
                  className="row mb-5 mt-3"
                  id="ack_btn"
                  style={{ alignContent: "center" }}
                >
                  <div className="col-lg-12" align="center">
                    <a
                      href="#"
                      id="submit_kc"
                      className="btn btn-sm btn-labeled-center btn-primary pl-5 pr-5"
                    >
                      <span className="btn-text">Submit</span>
                    </a>
                  </div>
                </div> */}
              </div>

              <div
                id="ack_comment"
                className="mt-2 mb-3 ml-1 mr-1 pl-2 pr-2 pt-1 pb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #eef1f5, #e6e9f0, #eef1f5)",
                  borderRadius: "0.25rem",
                }}
              >
                <div className="form-group">
                  <div
                    className="ml-3"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    Question No : 1
                  </div>
                  <div
                    className="ml-3"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    Question Type : MCQ
                  </div>
                  <div
                    className="ml-3"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    Question Mark : 1
                  </div>
                  <div
                    className="mt-1 me-1"
                    style={{
                      backgroundColor: "#E8EAF7",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <div className="col-lg-12 mt-2" id="div_update_message">
                      <Editor
                        name="description"
                        onChange={(data) => {
                          setEditorData(data);
                        }}
                        editorLoaded={editorLoaded}
                        isDisabled={true}
                      />
                    </div>
                  </div>
                  <hr />
                  <div
                    className="row ms-1"
                    style={{
                      alignContent: "center",
                    }}
                  >
                    <RadioCheckbox
                      name="Question1"
                      value="option1"
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      currentValue={currentValues}
                      displayText="Option 1"
                    />
                    <RadioCheckbox
                      name="Question1"
                      value="option2"
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      currentValue={currentValues}
                      displayText="Option 2"
                    />
                  </div>
                  <label id="count" style={{ fontSize: "12px" }}>
                    {JSON.stringify(currentValues)}
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row mb-2 mt-1">

                    <div className="col">
                        <h6 style="font-weight:600">**YOU ARE NOT AUTHORIZED TO ACCESS THIS WEB PAGE AS PER THE DOT
                            COMPLIANCE**</h6>
                    </div>

                </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyPendingTask;
