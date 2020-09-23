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
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Ae78fPJISS8uzsLe9B0TZWcfhyWzaRkeCuBo86Sy&date=${PicDate}`)
            .then((res) => { 
                setPicData(res.data)});
    };
    useEffect(effectFn, []);
    
    return (
        <div className="container">
            <img src={picData.hdurl} alt="Pic of the Day" />
            <SideContainer date={picData.date} explanation={picData.explanation} />
            <Top title={picData.title} />
            <Artist copyright={picData.copyright} />
            <div className="pickDate">
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
                <img src="https://pngimage.net/wp-content/uploads/2018/06/nasa-png-5.png" alt="NASA"></img>
            </div>
        </div>
    );
}
