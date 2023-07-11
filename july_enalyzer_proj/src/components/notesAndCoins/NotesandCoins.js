import "./NotesandCoins.css";

export const NotesAndCoins=({imageUrl, noteAmount, numberOfNotes})=>{
    return(
      <section className="note-coin">
        {imageUrl && <img src={imageUrl} alt="no note found" />}
        {!imageUrl && <span className="circle"></span>}
        <span className="text-numberof-notecoins">{`${numberOfNotes} x ${noteAmount}`}</span>
      </section>
    );
}