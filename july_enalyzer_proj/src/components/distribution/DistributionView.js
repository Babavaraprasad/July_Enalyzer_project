import { useEffect, useState} from "react";
import "./DistributionComp.css";
import { useLocation,useNavigate } from "react-router-dom";
import { NotesCoins } from "./NotesCoins";
import pictureofnotes from "../Images/500-bill.png";
import backIcon from "../Images/back-arrow-icon.png";

export const DistibutionComp=()=>{

    const navigatetoMainpage= useNavigate();
    const money= useLocation();
    const value = money.state.amount;
     const navMainpage=((e)=>{
        navigatetoMainpage("/");
    })
    
    const notesandCoins=Object.keys(result).map((e)=>Number(e));
    const notes=notesandCoins.filter((e)=>e >= 50);
    const coinsDiameterabove20= notesandCoins.filter((e)=>e <50 && e >=2 && e!==10);
    const coinsDiameterEqualorBelow20= notesandCoins.filter((e)=>e===10 || e===1);

    useEffect(()=>{
        const model = DistributionModel.create();
        
        distribution(value);
    },[]);

    console.log(`notes: ${notes}`);
    console.log(`bigcoins: ${coinsDiameterabove20}`);
    console.log(`smallcoins: ${coinsDiameterEqualorBelow20}`);



    return (
       <>
        <button className="btn-back-Homepage" onClick={navMainpage}><img src={backIcon} alt="Backbutton not found"/></button>
        <header className="title">Depositing</header>
        <p className="header-amount">£ {money.state.amount}</p>
        {result && (
        <section className="render-money-container">
         {!!notes.length && (
        <div className="note">
        {notes.map((n)=>(<NotesCoins imageurl={pictureofnotes} noteamount={n} numberofnotes={result[n]} key={n}/>))}
        </div>
        )} 
        
        {!!coinsDiameterabove20.length && (
							<div className="bigCoin">
			{coinsDiameterabove20.map((e) => (<NotesCoins noteamount={e} numberofnotes={result[e]} key={e}/>))}
							</div>)}
                    
		{!!coinsDiameterEqualorBelow20.length && (
							<div className="smallCoin">
				{coinsDiameterEqualorBelow20.map((e) => (<NotesCoins noteamount={e} numberofnotes={result[e]} key={e}/>))}
							</div>)}
        </section> 
        )}   
        <p className="thanking-message">Thank You for using</p>
        <p className="thanking-message">Enalyzer ATM</p>
        </>
    );
}