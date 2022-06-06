import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import axios from "axios";

const CreateExercise = () => {

    const [inputvalues, setInputvalues] = useState({});

    const [showsuccess, setShowsuccess] = useState(false);
 
    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setInputvalues(values => ({ ...values, [name]: value }));
    }

    const ShowSuccess = () => {
        setShowsuccess(true)
        setTimeout(() => {
            setShowsuccess(false)
        }, 2500);
    }
    const createexerciseForm = (e) => {
        e.preventDefault();
        //console.log(values);
        ShowSuccess();

        axios.post('https://fullstack-crud-operation.herokuapp.com/excercises/add', inputvalues)
            .then(res => console.log(res.data));
        setInputvalues("");
        // window.location = '/';
    }
    return (
        <>
            <div className="container mt-5">
                {showsuccess ?
                    <div className="error w-50 bg-success text-white p-3 rounded">Exercise has been created successfully</div> : null
                }
                <h4>Create Exercise</h4>
                <form onSubmit={createexerciseForm}>
                    <div className="form-group">
                        <label>Usernmae<span className="text-danger">*</span></label>
                        <input type="text"
                            className="form-control" name="username" value={inputvalues.username || ""}
                            placeholder="Enter Username" id="username"
                            onChange={handleChange} required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Description <span className="text-danger">*</span></label>
                        <input type="text"
                            className="form-control" name="description" value={inputvalues.description || ""}
                            placeholder="Enter Description" id="desc"
                            onChange={handleChange} required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Duration: in minits <span className="text-danger">*</span></label>
                        <input type="number"
                            className="form-control" name="duration" value={inputvalues.duration || ""}
                            placeholder="Enter duration" id="duration"
                            onChange={handleChange} required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Date <span className="text-danger">*</span></label>
                        <input type="date"
                            className="form-control" name="date" value={inputvalues.date || ""}
                            id="date"
                            onChange={handleChange} required
                        />
                    </div>

                    <button type="submit"
                        className="btn btn-info text-white mt-3 me-3">Submit</button>
                    <Link to="/" className="ml-5">
                        <button
                            className="btn btn-info text-white mt-3">Back</button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default CreateExercise;