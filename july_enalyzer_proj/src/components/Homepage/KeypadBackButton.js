import keypadbackicon from "../../Images/back-arrow-icon.png";
import "./KeypadBackButton.css";

export const KeypadBackButton = ({ onClickHandler }) => {
  return (
    <button
      className="back-btn"
      onClick={() => {
        onClickHandler();
      }}
    >
      <img src={keypadbackicon} alt="No image found"></img>
    </button>
  );
};
