import React from 'react';
import { useState, useEffect, useRef } from 'react';


const Form = ({onClose}) =>{
    const inputField = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [staff, setType] = useState('');
    const [bio, setBio] = useState('');
    const [signUp, setSignUp] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    

    useEffect( () => {
    //     inputField.current.focus();
    // }, []);
    const errors = [];
    if (!name.length) errors.push('Please enter your Name');
    if (!email.includes('@')) errors.push('Please provide a valid Email');
    setValidationErrors(errors);
    }, [name, email])

    const handleSubmit = e => {
        e.preventDefault();
        setHasSubmitted(true);
        if (validationErrors.length) return alert(`Cannot Submit`);

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType
      
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setValidationErrors([]);
    setHasSubmitted(false);
  
    }

    const options = [
    'Mobile', 'Home'
    ];
    const defaultOption = options[0];


    return (
    <div>
    
      {hasSubmitted && validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
        
      <form onSubmit={handleSubmit}>  
        <h1>FILL OUT FORM</h1>   
          <label  htmlFor='name'>Name:</label>
          <input 
            ref={inputField}
            id="name" 
            type='text' 
            placeholder='Name' 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
          <br></br>
          <label htmlFor='email'>Email:</label>
          <input id="email" 
            type='text' 
            placeholder='Email' 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br></br>
            <label htmlFor="phone">Phone:</label>
            <input id="phone" 
            type="text" 
            placeholder='Phone'
            value={phone}
            onChange={e => setPhone(e.target.value)}
            />
            <br></br>

          <label htmlFor='phoneType'>Phone Type:</label>
           <select name="phoneType"
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}>
            <option value='' disabled>
              Select a phone type...
            </option>

              <option value="home">home</option>
              <option value="work">work</option>
              <option value="mobile">mobile</option>
            </select>
            <br></br>
            <label htmlFor='staff'>Instructor:</label>
            <input id="staff"
            type ="radio"
            value="staff"
            name="staff"
            checked
            onChange={e=> setType(e.target.value)}
            />
            <label htmlFor='staff'>Student:</label>
            <input id="staff"
            type ="radio"
            value="staff"
            name="staff"
            onChange={e=> setType(e.target.value)}
            />
            <br></br>

            <label htmlFor='bio'>Bio:</label>
            <textarea id="bio" name="bio" type='textarea' 
            placeholder='Bio' 
            value={bio}
            onChange={e => setBio(e.target.value)}>Enter text here...</textarea>
            <br></br>

        
            <input type="checkbox" id="signup" name="signup"
             onChange={e => setSignUp(e.target.value)}
             />
            <label for="signup">Sign Up for Email?</label>
   



            <input type={'submit'} value="Submit Form" />
    </form>
    </div>
  )
};



export default Form;