import {useState} from "react";
import axios from 'axios';

const SendData = (props) => {
    const [apiData,setApiData] = useState({playername:"",sport:"",dob:""});

    const savedata = (event) => {
        event.preventDefault();
        axios.post(` http://localhost:5244/api/player`,apiData);
    }

    const handleChange = (event) =>{
        const {name,value} = event.target
        setApiData({...apiData,[name]:value})
    }

    return(
        <>
        <h4>Add a New Player</h4>
        <form method="POST" onSubmit={savedata}>
            <input type="text" name="playername" onChange={handleChange} placeholder="PlayerName"/>
            <input type="text" name="sport" onChange={handleChange} placeholder="Sport Played"/>
            <input type="text" name="dob" onChange={handleChange} placeholder="yyyy-mm-dd"/>
            <input type="submit" onClick=""/>
        </form>
        </>
    )
}

export default SendData;