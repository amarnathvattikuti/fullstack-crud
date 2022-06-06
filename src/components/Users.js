import React, {useState} from "react";
import axios from "axios";


const Users = () => {

    const[username, setUsername]= useState("");

    const handleChange = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setUsername(value);
    }

    const SubmitUser = (e) =>{
        const user = e.target.value;
        e.preventDefault();
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        setUsername("");
    }

    return (
        <>
            <div className="container mt-5">
                <h4>Create user</h4>
                <form onSubmit={SubmitUser}>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input type="text"
                            className="form-control" name="Username" value={username}
                            placeholder="Enter Username" id="username"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Create User</button>
                </form>
            </div>
        </>
    )
}

export default Users;