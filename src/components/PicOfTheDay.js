import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SideContainer from './SideContainer';
import Top from './Title';
import Artist from './Artist';

export default function PicPage() {
    const [picData, setPicData] = useState([]);
    const effectFn = () => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Ae78fPJISS8uzsLe9B0TZWcfhyWzaRkeCuBo86Sy`)
            .then((res) => { 
                setPicData(res.data)});
    };
    useEffect(effectFn, []);
    console.log(picData);
    return (
        <div className="container">
            <img src={picData.hdurl} alt="Pic of the Day" />
            <SideContainer date={picData.date} explanation={picData.explanation} />
            <Top title={picData.title} />
            <Artist copyright={picData.copyright} />
            <div className="credits">
                <img src="https://pngimage.net/wp-content/uploads/2018/06/nasa-png-5.png" alt="NASA"></img>
            </div>
        </div>
    );
}
