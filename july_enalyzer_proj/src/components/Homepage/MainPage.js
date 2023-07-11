import "./MainPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Keypad } from "./Keypad";
import { KeypadBackButton} from "./KeypadBackButton";

export const MainPage = () => {
  const navMoneyPage = useNavigate();
  const [amount, setAmount] = useState("");
  const keypadValue = [...new Array(9)];


  
  const onKeypadElementClick = (e) => {
    setAmount(`${amount}${e}`);
  };
  
  
  
  const keypadBackButtonHandler = () => {
    const newamount = amount.slice(0, -1);
    setAmount(newamount);
  };

  const submitbuttonHandler = (e) => {
    e.preventDefault();
    navMoneyPage("/Distribution", { state: { amount: amount } });
  };

  return (
    <>
      <p className="select-amount">Select amount</p>
      <input
        className="input-text"
        type="text"
        defaultValue={`£ ${amount}`}
        //onChange={onInputChange}
        key={amount}

        autoFocus={true}
      />
      <section className="Keypad-container">
        {keypadValue.map((k, i) => (
          <Keypad
            key={i}
            keypadcontent={i + 1}
            onClickHandler={onKeypadElementClick}
          />
        ))}
        <KeypadBackButton onClickHandler={keypadBackButtonHandler} />
        <Keypad keypadcontent={"0"} onClickHandler={onKeypadElementClick} />
        
        <button
          className={`btn-submit ${amount ? "" : "disabled"}`}
          onClick={submitbuttonHandler}
        >
          submit
        </button>
      </section>
    </>
  );
};
