import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SideContainer from './SideContainer';
import Top from './Title';
import Artist from './Artist';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'
import "../styles.css";


export default function PicPage() {
    const [picData, setPicData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null)
    const PicDate = moment(selectedDate).format('YYYY-MM-DD')
    const effectFn = () => {
        
        if (selectedDate !== null) {
            axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Ae78fPJISS8uzsLe9B0TZWcfhyWzaRkeCuBo86Sy&date=${PicDate}`)
            .then((res) => { 
                setPicData(res.data)});
        } else {
            axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Ae78fPJISS8uzsLe9B0TZWcfhyWzaRkeCuBo86Sy&date=2020-09-24`)
            .then((res) => { 
                setPicData(res.data)});
        }
  
    };

    useEffect(effectFn, [selectedDate]);
 
    return (
        <div className="container">
            <img src={picData.hdurl} alt="Pic of the Day" />
            <div>
            <SideContainer date={picData.date} explanation={picData.explanation} />
            </div>
            <Top title={picData.title} />
            <Artist copyright={picData.copyright} />
            <div className="pickDate">
                <p>Pick a Date</p>
                <DatePicker 
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)}
                    dateFormat='yyyy-MM-dd'
                    maxDate={new Date()}
                    isClearable
                    showYearDropdown
                    scrollableYearDropdown
                    />
            </div>
            <div className="credits">
                <img src='../../images/pngfind.com-nasa-png-250493.png' alt="NASA"></img>
            </div>
        </div>
    );
}
