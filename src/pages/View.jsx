import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const View = () => {
  let navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("users")) || [];
  const [record, setRecord] = useState(data);
  const [mdelete, setMdelete] = useState([]);
  const [mstatus, setMstatus] = useState([]);
  //del rec
  const RecordDel = (d) => {
    let del = record.filter((val) => val.id != d);
    setRecord(del);
    alert("Record Deleted Successfully...");
  };

  //edit record
  const RecordEdit = () => {
    // alert("Record Edited Successfully...");
  };

  //multiple del
  const handlemuldel = (id, checked) => {
    let mdel = [...mdelete];
    if (checked) {
      mdel.push(id);
    } else {
      mdel = mdel.filter((val) => val.id != id);
    }
  };
  const MulDel = (md) => {};

  //mul status
  const handlemulstatus = (id, checked) => {};

  return (
    <div className=" p-5">
      <button className="btn btn-info text-white mb-3">
        <Link className="text-white text-decoration-none" to={"/"}>
          ADD
        </Link>
      </button>
      <table className="table table-hover table-info table-border text-center">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Course</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            <th scope="col">
              <button
                className="btn btn-danger text-white btn-small"
                onClick={handlemuldel()}
              >
                MulDel
              </button>
            </th>
            <th scope="col">
              <button
                className="btn btn-warning text-white btn-small"
                onClick={handlemulstatus()}
              >
                MulStatus
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {record.map((r) => {
            return (
              <>
                <tr>
                  <th scope="row">{r.id}</th>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.password}</td>
                  <td>{r.course}</td>
                  <td>{r.date}</td>
                  <td>{r.status}</td>
                  <td>
                    <button
                      className="bg-danger btn btn-sm text-white me-1"
                      onClick={() => RecordDel(r.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-info btn btn-sm text-white"
                      onClick={() => RecordEdit(r.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(n) => handlemuldel(n.target.checked)}
                      checked={mdelete.includes(r.id)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(n) => handlemulstatus(n.target.checked)}
                      checked={mstatus.includes(r.id)}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default View;
