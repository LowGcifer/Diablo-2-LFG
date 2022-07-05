import React from "react";
import "./searchwindow.css";

function SearchWindow(props) {
  return props.trigger ? (
    <div className="search-popup">
      <div className="search-popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default SearchWindow;
