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
            keypadcontent={i + 1}
            onClickHandler={onKeypadElementClick}
          />
        ))}
        <KeypadBackButton onClickHandler={keypadBackButtonHandler} />
        <Keypad keypadcontent={"0"} onClickHandler={onKeypadElementClick} />
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

/*
function generateMoney(amount) {
  const denominations = [
    { name: "notes", values: [1000, 500, 200, 100] },
    { name: "bigCoins", values: [50, 30, 20] },
    { name: "smallCoins", values: [10, 5, 3, 2, 1] }
  ];

  const result = {};

  for (let denomination of denominations) {
    const { name, values } = denomination;
    result[name] = {};

    for (let value of values) {
      if (amount >= value) {
        const count = Math.floor(amount / value);
        result[name][value] = count;
        amount -= count * value;
      }
    }
  }

  return result;
}
*/