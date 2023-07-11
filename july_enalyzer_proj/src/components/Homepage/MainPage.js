import "./MainPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Keypad } from "./Keypad";
import { KeypadBackButton} from "./KeypadBackButton";

export const MainPage = () => {
  const navMoneyPage = useNavigate();
  const [amount, setAmount] = useState("£ ");
  const keypadValue = [...new Array(9)];
  
 const onInputChange=(e)=>{
  setAmount(e.target.value);
 }
  const onKeypadElementClick = (e) => {
    setAmount(`${amount}${e}`);
  };
  
  const keypadBackButtonHandler = () => {
    let newamount = amount.slice(0, -1);
    if(!newamount) {
      newamount = "£ "
    }
    setAmount(newamount);
  };

  const submitbuttonHandler = (e) => {
    e.preventDefault();
    navMoneyPage("/Distribution", { state: { amount: amount } });
  };

  return (
    <>
      <p className="title">Select amount</p>
      <input
        className="input-text"
        type="text"
        defaultValue={`${amount}`}
        onChange={onInputChange}
        key={amount}
        autoFocus={true}
      />
      <section className="keypad-container">
        {keypadValue.map((_, i) => (
          <Keypad
            key={i}
            keypadContent={i + 1}
            onClickHandler={onKeypadElementClick}
          />
        ))}
        <KeypadBackButton onClickHandler={keypadBackButtonHandler} />
        <Keypad keypadContent={"0"} onClickHandler={onKeypadElementClick} />
      </section>
      <button
          className={`btn-submit ${amount.substring(2) ? "" : "disabled"}`}
          onClick={submitbuttonHandler}
        >
          submit 
        </button>
    </>
  );
};
