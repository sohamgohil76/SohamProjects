import React, { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./card.css"


export default function Card(props) {
    console.log("the props", props)
    const id = props.id
    console.log("hey>>>", id)
    const [dispdata, setdispdata] = useState({});
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://20.114.244.229:1337/events/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("soham sir ===>", result);
                setdispdata(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    // {dispdata.map((event: any) => {
    return (
        <><Header></Header>
            <div class="_card">
                <div class="_main">
                    <div class="_image">
                        <img src={'http://20.114.244.229:1337' + dispdata?.Name?.url} alt="Avatar" />
                        <p>{dispdata.details}</p>
                    </div>
                    {/* <div className="container">
         
        </div> */}
                </div>
            </div>
            <Footer></Footer></>
    )
    // })

}

// }