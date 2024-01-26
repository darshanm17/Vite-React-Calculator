
import styles from './App.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Display from './components/Display'
import ButtonContainer from './components/ButtonsContainer'
import { useState } from 'react'
import "./index.css"
function App() {
  const [clicked,setclicked]=useState("");

const onbuttonclicked=(data)=>{
  setclicked(data);
  console.log("clicked"+data);
  if(data=='C'){
     setclicked("");
  }
  else if(data=='='){
   const result=eval(clicked);
   setclicked(result);
  }
  else{
    let newcalval=clicked+data;
    setclicked(newcalval);
  }
}
console.log(clicked);
  return (
    <>
    <div className={`${styles.heading} fs-bold`}>DM CALCULATOR</div>
    <div className={styles.Dodd}>
    <div className={styles.calculator}>
     <Display clicked={clicked}></Display>
     <ButtonContainer onbuttonclicked={onbuttonclicked}></ButtonContainer>
     
     
  

      
    </div>
    </div>
      </>
  )
}

export default App
