export function Form({title1, title2, button}){
 return (     
    <form>
        <h2 htmlFor='inputMotto'>NEW ENTRY</h2>
      <div>
      <label htmlFor='inputMotto'>{title1}</label>
      <input type='text' id='inputMotto'></input>
        
      </div>
      <div>
      <label htmlFor='inputNotes'>{title2}</label>
      <textarea type='text' id='inputNotes'></textarea>
      </div>
      <div><button type="submit">{button}</button></div>
     
      </form>
)}