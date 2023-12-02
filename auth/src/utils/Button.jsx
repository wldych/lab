import { NavLink } from "react-router-dom";

export default function Button({ $to, $text, $handleOnClick, $disabled }) {
  return (
    <NavLink to={$to}>
      <button
        disabled={$disabled}
        onClick={$handleOnClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
      >
        {$text}
      </button>
    </NavLink>
  );
}
