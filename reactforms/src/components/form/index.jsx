import React from 'react';
import { useState, useEffect, useRef } from 'react';


const Form = ({onClose}) =>{
    const inputField = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    console.log(inputField);

    useEffect( () => {
        inputField.current.focus();
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputField.current);
        console.log({name, email, phone});
        onClose();
    }


    return (
        
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
        <br />
      <input type={'submit'} value="Apply!" />
    </form>
  )
};



export default Form;