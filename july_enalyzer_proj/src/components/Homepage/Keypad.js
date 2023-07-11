import "./Keypad.css";
export const Keypad=({keypadcontent, onClickHandler})=>{
    return(
      <button className="keypad-btn" onClick={()=>onClickHandler(keypadcontent)}>{keypadcontent}</button>
    );
}