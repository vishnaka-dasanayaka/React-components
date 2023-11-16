import React from "react";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <div>
      <Link to={"/"}>
        <button className="bg-channel_yellow py-1 px-2 uppercase font-extrabold hover:bg-channel_green hover:text-white rounded-lg texy-xl">
          home
        </button>
      </Link>
    </div>
  );
}

export default HomeButton;
