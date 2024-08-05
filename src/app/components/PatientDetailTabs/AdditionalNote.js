"use client";
import { useState } from "react";

export default function AdditionalNote({additionalNote}) {

  //note state
  const [note, setNote] = useState(additionalNote);
  //textarea editable state
  const [isEditable, setEditable] = useState(false);
  //note change handler
  const handleNoteChange = (event) => setNote(event.target.value);

  const enableEdit = () => setEditable(true);
  const disableEdit = () => setEditable(false);

  return (
    <div>
      
      <section>
        <label>Note:</label>
        <textarea rows="10" cols="50" className="noteText" readOnly={!isEditable} onChange={handleNoteChange} value={note}></textarea>
      </section>
      <section>
        {//Display Edit or Save button depending on editable
        isEditable ? (
          <button className="btn" onClick={disableEdit}>Save</button>
        ) : (
          <button className="btn" onClick={enableEdit}>Edit</button>
        )}
      </section>
    </div>
  );
}
