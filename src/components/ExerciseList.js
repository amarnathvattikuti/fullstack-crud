import React from "react";
import { Link } from "react-router-dom";
import RowItems from "./exerciseItems";

const ExerciseList = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-end">
            <Link to="/create">
            <button className="btn btn-info text-white p-2">Create User Exercise</button>
            </Link>
          </div>
        </div>
        <table className="table table-bordered table-striped table-hover table-responsive-md">
          <thead>
            <tr className="table-dark">
             <th>User ID</th>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <RowItems /> 
            
          </tbody>
        </table>
      </div>
    </>
  )

  
}

export default ExerciseList;