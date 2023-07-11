import "./NotesandCoins.css";

export const NotesandCoins=({imageUrl, noteAmount, numberOfNotes})=>{
    return(
      <section className="note-coin">
        {imageUrl && <img src={imageUrl} alt="no note found" />}
        {!imageUrl && <span className="circle"></span>}{`${numberOfNotes} x ${noteAmount}`}
      </section>
    );
}