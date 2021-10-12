import React,{useState,useEffect} from 'react'
import './form.css'
import History from  '../../components/history/History';

export default function Form({location}) {
    const [values,setValues]=useState({
        fullName:'',
        movieName:"",
        language:""
  });

    const [movie,setMovie]=useState('');

    useEffect(()=>{
        const params=new URLSearchParams(location.search);
        const q=params.get('q');
        setMovie(q?q:'Movie Name');
    },[])

    useEffect(()=>{
        localStorage.setItem('form',JSON.stringify(values))
    },[values]);

    const [submitted,setSubmitted]=useState(false);
    const [valid,setValid]=useState(false);

    const handleFullNameChange=(event)=>{
        setValues({...values,fullName:event.target.value})
    }

    const handleMovieNameChange=(event)=>{
        setValues({...values,movieName:event.target.value})
    }

    

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values.fullName&&values.movieName&&values.language){
            setValid(true);
        }
        setMovie(values);
        History.push('/form?q= +values')
        setSubmitted(true);

            }

    return (
        <div class="form">
            <h1 className="book">Book Your Show</h1>
            <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        
         {submitted && valid? <div class="success-message">Success! Show Ticket Confirmed</div> :null}
        <input
        onChange={handleFullNameChange}
         value={values.fullName}
          class="form-field"
          type="text"
          placeholder="Your Name"
          name="fullName"
        />
        
         {submitted && !values.fullName ?<span>Please enter your full name</span> :null}
        <input
        onChange={handleMovieNameChange}
          value={values.movieName}
          class="form-field"
          type="text"
          placeholder={movie}
          name="movieName"
        />
        
       
        <input
          
          class="form-field"
          type="datetime-local"
          placeholder="Show Date and Time"
          name="date"
          value="2021-11-12T19:30"
        />

           
        
        <button class="form-field" type="submit">
          Confirm Show
        </button>
      </form>
    </div>
        </div>
    )
}
