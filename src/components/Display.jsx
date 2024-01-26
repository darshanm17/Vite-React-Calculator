import styles from './Display.module.css'

const Display=({clicked})=>{
  const Data =(data)=>{
    console.log(data);
     
  }
     return(
      <>
          <input className={styles.display} type='text'value={clicked} readOnly
          />
      </>

     );
};
export default Display;