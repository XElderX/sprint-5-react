import React from 'react';
import {useState} from 'react';
import styles from './Greeter.module.css';

const Greeter = () =>{
  const [userName, setUserName]= useState("");
  const [greetStatus, setGreetStatus] = useState(null)

  return (
    <div className={styles.Greeter}>
      Greeter Component
     
      <input type="text"
       className={styles.input}
       placeholder={'Please enter your name'} 
       onChange={(e) =>{
         setUserName(e.target.value);
         setGreetStatus(false)
       }}
       />
       <button className={styles.submitGreeterBtn} 
       type="submit"
       onClick={(e) =>{userName!==""? setGreetStatus(true) : setGreetStatus(false)
       }}
       >Submit your name</button>


<h5 className={styles.h5}>{greetStatus ? `Hello, ${userName}` : ""}</h5>
  
    </div>
  );



}
  
  
  
  
  
  export default Greeter;
  