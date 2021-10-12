import {React,useState,useEffect} from 'react'
import axios from 'axios'
import './summaryOne.css'
import { Link } from 'react-router-dom';

export default function SummaryOne() {
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
            <div className="img-one">
            <img src={shows[0].show.image.medium} alt="" />
            </div>
            <div className="link">
            <Link className="sum-link" to="/form?q=all rise">Book Show</Link>
            </div>
            <div className="sum-one">
             <div className="name"> <strong>Name</strong>-{shows[0].show.name}</div>
              <div className="lang"><strong>Language</strong>-{shows[0].show.language}</div>
              <div className="rating"><strong>Rating</strong>-Average({shows[0].show.rating.average})</div>
              <div className="summary"><strong>Summary</strong></div>
              <div className="text">{shows[0].show.summary}</div>
            </div>
           

        </div>

    )
         }

         return(
             <div></div>
         )
}
