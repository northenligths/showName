import React,{useState} from 'react'
import './form.css'

export default function Form() {
    const [values,setValues]=useState({
          fullName:"",
          movieName:"",
          language:""
    })

    const [submitted,setSubmitted]=useState(false);
    const [valid,setValid]=useState(false);

    const handleFullNameChange=(event)=>{
        setValues({...values,fullName:event.target.value})
    }

    const handleMovieNameChange=(event)=>{
        setValues({...values,movieName:event.target.value})
    }

    const handleLanguageChange=(event)=>{
        setValues({...values,language:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values.fullName&&values.movieName&&values.language){
            setValid(true);
        }
        setSubmitted(true);
        
            }

    return (
        <div class="form">
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
          placeholder="Movie Name"
          name="movieName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
        onChange={handleLanguageChange}
          value={values.language}
          class="form-field"
          type="text"
          placeholder="Language"
          name="language"
        />
        <input
          
          class="form-field"
          type="datetime-local"
          placeholder="Show Date and Time"
          name="date"
          value="2021-11-12T19:30"
        />

           
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Confirm Show
        </button>
      </form>
    </div>
        </div>
    )
}
