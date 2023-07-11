import "./Keypad.css";
export const Keypad=({keypadContent, onClickHandler})=>{
    return(
      <button className="keypad-btn" onClick={()=>onClickHandler(keypadContent)}>{keypadContent}</button>
    );
}