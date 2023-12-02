import React, { Suspense } from "react";
import { AiFillEdit, AiFillRest } from "react-icons/ai";
import { NavLink, useLoaderData, Await, useParams } from "react-router-dom";
import API from "../utils/API";
import Button from "../utils/Button";
import styles from "../css/Styles.module.css";

export const loader = ({ params: { id } }) => {
  const notePromise = API.getNote(id);
  return { notePromise };
};

export default function ViewNote() {
  const { id } = useParams();
  const { notePromise } = useLoaderData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await
        resolve={notePromise}
        errorElement={<div>There is no such note. 404</div>}
      >
        {(note) => {
          return (
            <div>
              <div className={`${styles.titlePage}`}>
                <Button $to="/notes" $text="Back"></Button>
                <p className="text-4xl font-bold break-all mt-5">
                  {note.title}
                </p>
                <div className={`${styles.viewBtn}`}>
                  <NavLink to={`/notes/edit/${id}`}>
                    <AiFillEdit className=" w-7 h-7" />
                  </NavLink>
                  <NavLink
                    to={"/notes"}
                    reloadDocument="true"
                    onClick={() => {
                      API.deleteNote(note.id);
                    }}
                  >
                    <AiFillRest className="w-7 h-7" />
                  </NavLink>
                </div>
              </div>
              <div className=" p-10 min-h-max max-h-max text-left bg-slate-200">
                <p className=" h-auto break-words">{note.text}</p>
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
