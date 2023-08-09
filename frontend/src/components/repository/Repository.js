import React, { useState } from "react";
import { Table } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Repository = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  var products = [
    {
      id: 1,
      name: "Product1",
      price: 120,
    },
    {
      id: 2,
      name: "Product2",
      price: 80,
    },
  ];

  const handleTab1Change = () => {
    setActiveTab("tab1");
  };
  const handleTab2Change = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="ms-4 me-4">
      <div className="row">
        <div className="col">
          <div className="card mb-grid text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className={
                      activeTab === "tab1"
                        ? "nav-link pb-3 active"
                        : "nav-link pb-3"
                    }
                    href="#card-tab-content-1"
                    style={{ fontSize: "11px", fontWeight: "600" }}
                    onClick={handleTab1Change}
                  >
                    Updates
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={
                      activeTab === "tab1"
                        ? "nav-link pb-3"
                        : "nav-link pb-3 active"
                    }
                    href="#card-tab-content-2"
                    style={{ fontSize: "11px", fontWeight: "600" }}
                    onClick={handleTab2Change}
                  >
                    Knowledge Tests
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-body">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="card-tab-content-1"
                  role="tabpanel"
                  aria-labelledby="card-tab-1"
                  align="left"
                >
                  <div className="tab-pane fade show active p-1" align="right">
                    <button
                      data-toggle="modal"
                      data-target="#up_filtration"
                      className="btn btn-sm btn-labeled btn-primary"
                    >
                      <span className="btn-label">
                        <span
                          className="oi oi-sort-descending"
                          aria-hidden="true"
                        ></span>
                      </span>
                      <span className="btn-text">Filter By</span>
                    </button>

                    <button
                      data-toggle="modal"
                      data-target="#up_val_change"
                      className="btn btn-sm btn-labeled btn-danger"
                    >
                      <span className="btn-label">
                        <span
                          className="oi oi-calendar"
                          aria-hidden="true"
                        ></span>
                      </span>
                      <span className="btn-text">Change Validity</span>
                    </button>
                  </div>

                  <div className="card mb-grid">
                    <div
                      className="table-responsive-md"
                      id="elixir_table_1_div"
                    >
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Alternate Address</th>
                            <th>Zip Code</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>@John</td>
                            <td>John@testmail</td>
                            <td>123 st LA</td>
                            <td>111111111</td>
                            <td>123 st LA</td>
                            <td>201301</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Harry</td>
                            <td>Potter</td>
                            <td>@harrypotter</td>
                            <td>harry@testmail</td>
                            <td>123 st LA</td>
                            <td>111111111</td>
                            <td>123 st LA</td>
                            <td>201301</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td colSpan={2}>Kylie Jainer</td>
                            <td>@Kylie</td>
                            <td>kylie@testmail</td>
                            <td>123 st LA</td>
                            <td>111111111</td>
                            <td>123 st LA</td>
                            <td>201301</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>

                {/* <div
                  className="tab-pane fade"
                  id="card-tab-content-2"
                  role="tabpanel"
                  aria-labelledby="card-tab-2"
                  align="left"
                >
                  <div className="card mb-grid">
                    <div className="table-responsive-md">
                      <table
                        className="table table-actions table-striped table-hover mb-0"
                        id="elixir_table_2"
                        data-table
                      >
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              style={{ fontSize: "11px", fontWeight: "600" }}
                            >
                              LDAP
                            </th>
                            <th
                              scope="col"
                              style={{ fontSize: "11px", fontWeight: "600" }}
                            >
                              Total
                            </th>
                            <th
                              scope="col"
                              style={{ fontSize: "11px", fontWeight: "600" }}
                            >
                              Pending
                            </th>
                            <th
                              scope="col"
                              style={{ fontSize: "11px", fontWeight: "600" }}
                            >
                              Completed
                            </th>
                            <th
                              scope="col"
                              style={{ fontSize: "11px", fontWeight: "600" }}
                            >
                              Completion_Rate
                            </th>
                            <th
                              scope="col"
                              className="sorting_desc_disabled sorting_asc_disabled"
                              style={{ fontSize: "11px", fontWeight: "600" }}
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td id="sender_email">snd.sender</td>
                            <td>snd.total_updates</td>
                            <td>snd.pending_updates</td>
                            <td>snd.completed_updates</td>
                            <td>snd.completion_rate</td>
                            <td>
                              <button
                                type="button"
                                data-toggle="modal"
                                data-target="#up_sender_details"
                                className="btn btn-sm btn-info"
                                onclick="modal_poc_open(this.parentElement.parentElement)"
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
