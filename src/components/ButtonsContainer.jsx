import Buttons from "./Buttons";
import styles from "./ButtonsContainer.module.css"
const ButtonContainer =({onbuttonclicked})=>{

 return(
    <> <div className={styles.buttons_container}>
      <Buttons onbuttonclicked={onbuttonclicked}/>
    </div>

    </>
 );
};
export default ButtonContainer;