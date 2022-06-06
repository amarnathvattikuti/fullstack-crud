import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




const UpdateExercise = () => {
 const[showsuccess, setShowsuccess] = useState(false);

  const params = useParams();
  const getitemResponse = () => {
    const id = params.id;
    axios.get('https://fullstack-crud-operation.herokuapp.com/excercises/' + id)
      .then(res => {
        setValues(res.data)
      })

      .catch(err => err.err);
  }

  useEffect(() => {
    getitemResponse()
    // eslint-disable-next-line
  }, [])

  let [values, setValues] = useState({});
//date manipulation
  const newDate = () => {
    var date = new Date(values.date);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    date = yyyy + '-' + mm + '-' + dd; 
    return date;
  }

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setValues(values => ({ ...values, [name]: value }))
  }
//show success method
  const ShowSuccess = () => {
    setShowsuccess(true)
    setTimeout(() => {
    setShowsuccess(false)
    window.location = '/';
    }, 2500);
  }

  //update method
  const updateexerciseForm = (e) => {
    e.preventDefault();
    ShowSuccess();
    const id = params.id;
    axios.put('https://fullstack-crud-operation.herokuapp.com/excercises/update/' + id, values)
      .then(res => console.log(res.data));
  }
  return (
    <>
      <div className="container mt-5">
        {showsuccess ? 
        <div className="error w-50 bg-success text-white p-3 rounded">Exercise has been updated successfully</div> : null
        }
        <h4>Update Exercise</h4>
        <form onSubmit={updateexerciseForm} className="mt-4">
          <div className="form-group">
            <label>Usernmae <span className="text-danger">*</span></label>
            <input type="text"
              className="form-control" name="username" value={values.username}
              placeholder="Enter Username" id="username"
              onChange={handleChange} required
            />
          </div>
          <div className="form-group mt-2">
            <label>Description <span className="text-danger">*</span></label>
            <input type="text"
              className="form-control" name="description" value={values.description}
              placeholder="Enter Description" id="desc"
              onChange={handleChange} required
            />
          </div>
          <div className="form-group mt-2">
            <label>Duration: in minits <span className="text-danger">*</span></label>
            <input type="number"
              className="form-control" name="duration" value={values.duration}
              placeholder="Enter duration" id="duration"
              onChange={handleChange} required
            />
          </div>
          <div className="form-group mt-2">
            <label>Date <span className="text-danger">*</span></label>
            <input type="date"
              className="form-control" name="date" value={newDate()}
              id="date"
              onChange={handleChange} required
            />
          </div>

          <button type="submit"
            className="btn btn-info text-white mt-3 me-3">Update</button>
          <Link to="/" className="ml-5">
            <button
              className="btn btn-info text-white mt-3">Back</button>
          </Link>
        </form>
      </div>
    </>
  )
}

export default UpdateExercise;