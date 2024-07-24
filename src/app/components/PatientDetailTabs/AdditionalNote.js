"use client";
import { useState } from "react";

const mockNote = "Note about this patient!";
export default function AdditionalNote() {
  //To-Do:get note from database and set as initial state
  //note state
  const [note, setNote] = useState(mockNote);
  //textarea editable state
  const [isEditable, setEditable] = useState(false);
  //note change handler
  const handleNoteChange = (event) => setNote(event.target.value);

  const enableEdit = () => setEditable(true);
  const disableEdit = () => setEditable(false);

  return (
    <div>
      <section>
        {//Display Edit or Save button depending on editable
        isEditable ? (
          <button onClick={disableEdit}>Save</button>
        ) : (
          <button onClick={enableEdit}>Edit</button>
        )}
      </section>
      <section>
        <label>Note:</label>
        <textarea readOnly={!isEditable} onChange={handleNoteChange} value={note}></textarea>
      </section>
    </div>
  );
}
