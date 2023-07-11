import { useEffect, useState} from "react";
import "./DistributionComp.css";
import { useLocation,useNavigate } from "react-router-dom";
import { NotesAndCoins } from "../notesAndCoins/NotesandCoins";
import pictureofnotes from "../../Images/500-bill.png";
import backIcon from "../../Images/back-arrow-icon.png";
import {generateNotesAndCoins} from "./Distribution";


export const DistibutionComp = () => {
    const navigatetoMainpage= useNavigate();
    const [notesAndCoins, setNotesAndCoins] = useState(null);
    const money= useLocation();
    const value = money.state.amount.substring(2);;
     const navMainpage=((e)=>{
        navigatetoMainpage("/");
    })
    useEffect(()=>{
        const result = generateNotesAndCoins(value);
        setNotesAndCoins(result);
    },[]);
    
    return (
        <>
            <button className="btn-back-homepage" onClick={navMainpage}>
                <img src={backIcon} alt="Backbutton not found"/>
            </button>
            <header className="title">Depositing</header>
            <p className="header-amount">{money.state.amount}</p>
            {notesAndCoins && (
                <section className="render-money-container">
                    <div className="note">
                        {Object.entries(notesAndCoins.notes).map(([amount, count], i) => (
                            <NotesAndCoins imageUrl={pictureofnotes} noteAmount={amount} numberOfNotes={count} key={`notes${i}`}/>
                        ))}
                    </div>
                    <div className="bigCoin">
                        {Object.entries(notesAndCoins.bigCoins).map(([amount, count], i) => (
                            <NotesAndCoins noteAmount={amount} numberOfNotes={count} key={`notes${i}`}/>
                        ))}
                    </div>
                    <div className="smallCoin">
                        {Object.entries(notesAndCoins.smallCoins).map(([amount, count], i) => (
                            <NotesAndCoins noteAmount={amount} numberOfNotes={count} key={`notes${i}`}/>
                        ))}
                    </div>
                </section> 
            )}   

            <div className="thanking-message">Thank You for using 
            <br></br>
            Enalyzer ATM
            </div>
        </>
    );
}