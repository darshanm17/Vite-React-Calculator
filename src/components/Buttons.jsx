import styles from "./Buttons.module.css"
import Display from "./Display";
const Buttons = ({onbuttonclicked})=>{
  let butonlist=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return(
<>
{
  butonlist.map(buttoname=>
    (
      <button className={`${styles["button1"]} btn btn-secondary`} 
      onClick={()=>{
        onbuttonclicked(buttoname);
      }}
      >{buttoname}</button>

    )
  )
}


</>
  )
  ;
}
export default Buttons;