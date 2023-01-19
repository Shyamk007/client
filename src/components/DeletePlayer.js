import { useState } from "react";
import axios from "axios";

const SendData = (props) =>{
    const[apiData,setApiData] = useState({userid:""});

    const deletePlayer = (event) =>{
        event.preventDefault();
        axios.delete(`http://localhost:5244/api/player/${apiData.userid}`);
    }
    // this file is for deleting the player from the database

    const handleChange = (event) =>{
        const {name,value} = event.target
        setApiData({...apiData,[name]:value})
    }

    return(
        <>
        <br></br>
        <h4>Please Enter the Id of player you want to delete : </h4>
        <form method="GET" onSubmit={deletePlayer}>
            <input type="text" name="userid" onChange={handleChange} placeholder="Enter User Id"/>
            <input type="submit" value="Delete"/>
        </form>
        </>
    );
}

export default SendData;
