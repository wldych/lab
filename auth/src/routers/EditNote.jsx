import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/API";
import Input from "../utils/Input";
import TextArea from "../utils/TextArea";
import Button from "../utils/Button";
import styles from "../css/Styles.module.css";

export default function EditNote() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [titleError, setTitleError] = useState("");
  const navigate = useNavigate();

  const handleEdit = () => {
    if (!title.trim()) {
      setTitleError("Note title cannot be empty");
      return;
    }
    API.editNote(id, title, text).then(() => {
      title ? navigate("/notes") : navigate("");
    });
  };

  return (
    <div>
      <div className={`${styles.titlePage}`}>
        <Button $to="/notes" $text="Back" />
        <p className="text-4xl font-bold mt-5">Edit note</p>
      </div>
      <Input $type={"text"} $placeholder={"title"} $onDataChange={setTitle} />
      {titleError && <div className="text-red-500">{titleError}</div>}
      <TextArea $onDataChange={setText} $placeholder={"Enter "} />
      <Button $text="Save" $handleOnClick={handleEdit} />
    </div>
  );
}
