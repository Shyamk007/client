import {useEffect,useState } from "react";
import axios from "axios";

const DisplayData = (props) =>{
    const [apiData,setApiData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5244/api/player`)
            .then(response => {setApiData(response.data)});
    })

    var tablerows = apiData.map(obj => {
        return(
            <tr>
                <td>{obj.userid}</td>
                <td>{obj.playername}</td>
                <td>{obj.sport}</td>
                <td>{obj.dob}</td>
            </tr>
        );
    });

    return(
        <>
        <br></br>
        <table id="playersTable">
            <th>
                <td>UserId</td>
                <td>Player Name</td>
                <td>Sport</td>
                <td>Date Of Birth</td>
            </th>
            <tr>{tablerows}</tr>
        </table>
        </>
    )
}

export default DisplayData;