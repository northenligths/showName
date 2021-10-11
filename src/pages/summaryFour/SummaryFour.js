import {React,useState,useEffect} from 'react'
import axios from 'axios'
import './summaryFour.css'
import { Link } from 'react-router-dom';

export default function SummaryFour() {
    const url='https://api.tvmaze.com/search/shows?q=all'
        const [shows,setShow]=useState(null)
         useEffect(()=>{
            axios.get(url)
            .then(response=>{
                setShow(response.data)
            })
         },[url])

         if(shows){
    return (
        <div>
            <h1 className="sum">Summary</h1>
            <div className="four-img">
                <img src={shows[3].show.image.medium} alt="" />

            </div>
            <div className="link">
            <Link className="sum-link" to="/">Book Show</Link>
            </div>
            <div className="sum-one">
             <div className="name"> <strong>Name</strong>-{shows[3].show.name}</div>
              <div className="lang"><strong>Language</strong>-{shows[3].show.language}</div>
              <div className="rating"><strong>Rating</strong>-Average</div>
              <div className="summary"><strong>Summary</strong></div>
              <div className="text">{shows[3].show.summary}</div>
            </div>

           

        </div>

    )
         }

         return(
             <div></div>
         )
}
