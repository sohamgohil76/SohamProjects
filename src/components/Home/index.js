import React, { useEffect, useState } from "react"
import "./global.css"
import { navigate } from "gatsby";
import Footer from "../Footer";
import Header from "../Header"

export function data_information(data) {
    console.log("hey args==========>", data)
    navigate(`/app/home/${data}`)


}

export default function Layout() {

    const [falg, setFlag] = useState('');
    const [eventsList, setEventList] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://20.114.244.229:1337/events?${falg ? `_Year=${falg}` : ''}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("today===>", result);
                setEventList(result)
            })
            .catch(error => console.log('error', error));
    }, [falg])
    return (
        <><Header /><div className="wrapper">


            <div className="data_info1">
                <select className="drpdwn">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Arabic</option>
                    <option>French</option>
                </select>
                <h2>SOUNDSTORM IN NUMBERS</h2>
                <div className="info1">
                    <div className="data1">
                        <h2>200+ </h2>
                        <span>ARTISTS</span>
                    </div>
                    <div className="data1">
                        <h2>8 </h2>
                        <span>STAGES</span>
                    </div>
                    <div className="data1">
                        <h2>4 </h2>
                        <span>DAYS OF LIVE MUSIC</span>
                    </div>
                </div>
                <div className="info2">
                    <h2>REVIEWS FROM SOUNDSTORM 2019</h2>
                    <div className="data2">
                        <p>
                            We've never seen something at this scale, with these stages, with this level of a attendance. I felt like it was something great.
                        </p>
                        <p>
                            We've never seen something at this scale, with these stages, with this level of a attendance. I felt like it was something great.
                        </p>
                        <p>
                            We've never seen something at this scale, with these stages, with this level of a attendance. I felt like it was something great.
                        </p>
                    </div>
                </div>
                <div className="info3">
                    <div className="top">
                        <h2> EXPLORE EXPERIENCES AT SOUNDSTORM 2021 </h2>
                    </div>

                    <div className="information">
                        <div className="information_data">
                            <div className="data3">
                                <p>
                                    From world famous artists to street performances to private party boxes - Soundstorm has it all and more!
                                </p>
                            </div>

                            <div className="buttons">
                                <button className="butt">PLAN MY JOURNEY</button>
                                <button className="butt" id="butt2"> EXPLORE EXPERIENCES </button>
                            </div>

                        </div>
                        <div className="image">
                            <img src={'http://20.114.244.229/assets/web.png'} alt="img" />
                        </div>
                    </div>

                </div>
                <div className="info4">
                    <select className="drpdwn2" value={falg} onChange={(e) => setFlag(e.target.value)}>
                        <option value={'Years'}>Years</option>
                        <option value={'2019'}>2019</option>
                        <option value={'2020'}>2020</option>
                        <option value={'2021'}>2021</option>
                        <option>2022</option>
                    </select>

                </div>
                <div className="all_cards">
                    {eventsList.map((event) => {
                        return (
                            <div className="card">
                                <img src={'http://20.114.244.229:1337' + event.Name.url} alt="Avatar" />
                                <div className="container">
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                    <p>$ {event.price}</p>
                                    <div className="button">
                                        <button className="butt" onClick={() => data_information(event.id)}>VIEW DETAILS</button>
                                    </div>
                                </div>

                            </div>
                        );
                    })}


                </div>
                <div className="info5">
                    <div className="data_1">
                        <h3>A storm is brewing</h3>
                        <p>It’s coming Shaking, inspiring and moving us to one beat This rhythm is in our DNA It’s our sound, our place This is </p>
                    </div>
                    <div className="data_2">
                        <video controls src="http://20.114.244.229:1337/uploads/DJ_Decks_Cutaway_8094641edc.mov"></video>
                    </div>
                </div>
                <div className="info6">
                    <div className="data_21">
                        <h2>
                            BEST OF SOUNDSTROME 2019
                        </h2>
                    </div>
                    <div className="data_22">
                        <video controls src="http://20.114.244.229:1337/uploads/Heavy_Club_Dance_Scene_47924d742c.mov"></video>
                        <video controls src="http://20.114.244.229:1337/uploads/motionplaces0045_c007_q001_Oct2018_001b2303c4.mp4"></video>
                    </div>
                </div>

            </div>

        </div>
            <Footer />
        </>
    )
}
