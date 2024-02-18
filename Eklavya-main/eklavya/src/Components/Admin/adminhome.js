import React, { useState, useEffect } from "react";
import MyNavbar from "../Home/Navbar";
import axios from 'axios';
function AdminHome() {
  const [stud, setStud] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/gettutor")
//       .then((response) => response.json())
//        console.log("response from api : ",response)
//       .then((data) => {
//         console.log(data);
//         setStud(data);
//       })
//       .catch((error) => console.error("Error fetching Tutors"));
//   }, []);

useEffect(()=>{
    axios.get("http://localhost:8080/gettutor")
    .then((response)=>{
      console.log("res : ",response.data);
      setStud(response.data);
    })
    .catch((error)=>{
      console.log("error : ",error);
    })
},[])


  const handleApprove = (tutId) => {
    fetch("http://localhost:8080" + tutId + "/approve")
      .then((response) => {
        if (response.ok) {
          console.log("Tutor approved successfully!");
        } else {
          console.log("Error updating tutor:", response.statusText);
        }
      })
      .catch((error) => console.error("Error updating tutor", error));
  };

  const handleReject = (tutId) => {
    fetch("http://localhost:8080/" + tutId + "/reject")
      .then((response) => {
        if (response.ok) {
          console.log("Tutor rejected successfully");
        } else {
          console.error("Error rejecting tutor", response.statusText);
        }
      })
      .catch((error) => console.error("Error rejecting tutor", error));
  };
  

  console.log("data in state : ",stud);
  return (
    <>
      <div>
        <MyNavbar />
        <br />
        <br />
      </div>

      <div className="container">
        <div className="row">
          <br />
          <div>
            <table className="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact No</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Aadhar No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {stud.map((data, index) => (
                  <tr key={index}>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.contactNo}</td> {/* Corrected property name */}
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.aadharNo}</td>
                    <td id="st">
                      <button className="btn btn-danger mx-2" onClick={() => handleReject(data.tutId)}> {/* Corrected property name */}
                        Reject
                      </button>
                      <button className="btn btn-primary" onClick={() => handleApprove(data.tutId)}> {/* Corrected property name */}
                        Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
