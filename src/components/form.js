import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

export default function Form({setInfo, setState}){

    const [city,setCity] = useState("");
    useEffect(() => console.log(city),[city]);

    const handleChange = async () =>{
        const api = "87f7d78889853a9f98bd8c3a6f7c6e25";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
        await axios(baseURL).then(res => setInfo(res.data));
        setState(true);
    }

    return (
        <div>
            <h1>Hava Durumu</h1>
            <form onSubmit={(e) => {e.preventDefault(); handleChange()}}>
                <div className="form">
                    <input value={city} onChange={(e) => setCity(e.target.value)} className="inputText" type="text" placeholder="Enter city"/>
                </div>
                <div className="btnDiv">
                    <button type="submit" className="btn">Get data</button>
                </div>
            </form>
        </div>
    )
}