import React from 'react'
import "./style.css"

export default function Footer(){
    return(
        <div className='foot'>
            <div className='content1'>
                <h2>MDLBEAST</h2>
                <p>
                MDLBEAST is an entertainment company rooted in music
                culture. Anchored in the Middle East and shared globally;
                we showcase local, regional and international talent
                through immersive experiences and content. 
                </p>
            </div>
            <div className='content2'>
                <h2>EVENT</h2>
                <p><a>Soundstorm</a></p>
                <p><a>Tickets</a></p>
                <p><a>Lineup</a></p>
                <p><a>Experience</a></p>
                <p><a>Plan Your Journey</a></p>
                <p><a>FAQ</a></p>
            </div>
            <div className='content3'>
            <h2>LEGAL</h2>
                <p><a>Privacy Policy</a></p>
                <p><a>Terms and Condition</a></p>
                <p><a>Ticketing Platform</a></p>
                <p><a>Code of Conduct</a></p>
                <p><a>Respect & Reset (R&R)</a></p>
            </div>
        </div>
    )
}