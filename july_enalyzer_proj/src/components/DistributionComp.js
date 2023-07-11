import { useEffect, useState } from "react";
import "./DistributionComp.css";
import { useLocation, useNavigate } from "react-router-dom";
import { NotesandCoins } from "./NotesandCoins";
import pictureofnotes from "../Images/500-bill.png";
import backIcon from "../Images/back-arrow-icon.png";

export const DistibutionComp = () => {
  const [result, setResult] = useState({});
  const navigatetoMainpage = useNavigate();
  const money = useLocation();
  const value = money.state.amount;
  const navMainpage = (e) => {
    navigatetoMainpage("/");
  };

  const distribution = (value) => {
    let result = {};
    const types = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    types.forEach((element) => {
      let mulValue = Math.floor(value / element); 
      if (mulValue >= 1) {
        result[element] = mulValue; 
        value %= element; 
        console.log(result[element]);
      }
      setResult(result);
      return result;
    });
    console.log(result);
  };
  const notesandCoins = Object.keys(result).map((e) => Number(e));
  const notes = notesandCoins.filter((e) => e >= 50);
  const coinsDiameterabove20 = notesandCoins.filter(
    (e) => e < 50 && e >= 2 && e !== 10
  );
  const coinsDiameterEqualorBelow20 = notesandCoins.filter(
    (e) => e === 10 || e === 1
  );

  useEffect(() => {
    distribution(value);
  }, []);

  return (
    <>
   
      <button className="btn-back-Homepage" onClick={navMainpage}>
      <img src={backIcon} alt="Backbutton not found" />
      </button>
     
      <section className="header-section">
      <header className="title">Depositing</header>
      <p className="header-amount">£ {money.state.amount}</p>
      </section>

      {result && (
        <section className="render-money-container">
          {!!notes.length && (
            <section className="note">
              {notes.map((n) => (
                <NotesandCoins
                  imageUrl={pictureofnotes}
                  noteAmount={n}
                  numberOfNotes={result[n]}
                  key={n}
                />
              ))}
            </section>
          )}

          {!!coinsDiameterabove20.length && (
            <section className="bigCoin">
              {coinsDiameterabove20.map((e) => (
                <NotesandCoins noteAmount={e} numberOfNotes={result[e]} key={e} />
              ))}
            </section>
          )}

          {!!coinsDiameterEqualorBelow20.length && (
            <section className="smallCoin">
              {coinsDiameterEqualorBelow20.map((e) => (
                <NotesandCoins noteAmount={e} numberOfNotes={result[e]} key={e} />
              ))}
            </section>
          )}
        </section>
      )}
      <p className="thanking-message">Thank You for using</p>
      <p className="thanking-message">Enalyzer ATM</p>
      
    </>
  );
};



/*
// 658/1000=>!, 658/500=>1.316(1,2=1)
      //158/200=>!, 158/100=>1.58(1,2=1)
      //58/50=>1.16(1,2=1)
      //8/20=>!, 8/10=>!, 8/5=>1.6(1,2=1)
      //3/2=>1.5(1,2=1)
      //171=>1

*/