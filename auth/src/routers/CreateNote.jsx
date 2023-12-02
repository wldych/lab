import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";
import Input from "../utils/Input";
import TextArea from "../utils/TextArea";
import Button from "../utils/Button";
import styles from "../css/Styles.module.css";

function NewNote() {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const id = parseInt(localStorage.getItem("userId"));
  const [titleError, setTitleError] = useState("");
  const navigate = useNavigate();

  const handleCreateNote = () => {
    if (!title.trim()) {
      setTitleError("Note title cannot be empty");
      return;
    }
    API.createNote(id, title, noteText).then(() => {
      title ? navigate("/notes") : navigate("");
    });
  };

  return (
    <div>
      <div className={`${styles.titlePage}`}>
        <Button $to="/notes" $text="Back" />
        <p className="text-4xl font-bold mt-5">Create new note</p>
      </div>
      <Input
        $type="text"
        $placeholder="Note name"
        $onDataChange={(value) => {
          setTitle(value);
          setTitleError("");
        }}
        $required={true}
      />
      {titleError && <div className="text-red-500">{titleError}</div>}
      <TextArea $onDataChange={setNoteText} $placeholder="Note text... " />
      <Button $text="Create" $handleOnClick={handleCreateNote} />
    </div>
  );
}

export default NewNote;
