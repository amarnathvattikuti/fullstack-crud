import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

  const RowItems = () => {
    const [data, setData] = useState([]);
    //console.log(data);
  
    const getResponse = async () => {
  
      const exerciseItems = await axios.get('https://fullstack-crud-operation.herokuapp.com/excercises')
      setData(exerciseItems.data);
    }
  
    useEffect(() => {
      getResponse()
    }, [])
  
    const DeleteItem = (id) => {
         axios.delete(`https://fullstack-crud-operation.herokuapp.com/excercises/` + id)
         .then(res => console.log(res.data))
         .catch(err =>console.log(err.err));
      
         const remainitems = data.filter(el => el._id !== id)
         setData(remainitems);
    
       }
      
    const items = data.map((item) => {
      return (
        <>
          <tr>
            <td>{item._id}</td>
            <td>{item.username}</td>
            <td>{item.description}</td>
            <td>{item.duration}m</td>
            <td>{(item.date).slice(0, 10)}</td>
            <td>
              <Link to={"/update/" + item._id}>
              <button className="btns text-success"              
              >
              <i className="fa-solid fa-pen-to-square"></i>
              </button>
              </Link>
              <button className="btns text-danger"
              onClick={() => DeleteItem(item._id)}
              >
              <i className="fa-solid fa-trash-can"></i>
              </button>
              </td>
          </tr>
        </>
      )
    })
    return items;
    
  }

  export default RowItems;