import React, { Suspense } from "react";
import { AiFillEdit, AiFillRest } from "react-icons/ai";
import { Await, NavLink, useLoaderData } from "react-router-dom";
import API from "../utils/API";
import Button from "../utils/Button";
import styles from "../css/Styles.module.css";

export const loader = ({}) => {
  const id = localStorage.getItem("userId");
  const notesPromise = API.getNotes(id);
  return { notesPromise };
};

export default function Notes() {
  const { notesPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={notesPromise} errorElement={<div>Oops...</div>}>
        {(notes) => (
          <div>
            <p className="text-4xl font-bold mb-5">Notes</p>
            <Button $to="/notes/create" $text="Add new note" />
            {notes
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((note) => (
                <NavLink key={note.id} to={`/notes/view/${note.id}`}>
                  <div key={note.id} className={`${styles.note} bg-slate-200`}>
                    <div className="flex items-center break-all">
                      <p className="h-auto  max-w-3xl">
                        <b>{note.title}</b>
                      </p>
                    </div>
                    <div className={`${styles.btns}`}>
                      <p className="h-auto  font-thin">
                        {new Date(note.createdAt).toLocaleDateString()}
                      </p>
                      <object>
                        <NavLink to={`/notes/edit/${note.id}`}>
                          <AiFillEdit className="w-7 h-7" />
                        </NavLink>
                      </object>
                      <object>
                        <NavLink
                          onClick={() => {
                            API.deleteNote(note.id);
                          }}
                        >
                          <AiFillRest className="w-7 h-7" />
                        </NavLink>
                      </object>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
}
