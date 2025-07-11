import React from "react";
import HogCard from "./HogCard";

function HogList({hogs, hideDetails}) {
  return (
    <div className="ui grid container">
        {hogs.map((hog) => (
        <div className="pigTile">
        <div key={hog.name} className="ui eight wide column">
          <HogCard hog={hog} hideDetails={hideDetails}/>
        </div>
        </div>
      ))}
    </div> 
  );
}

export default HogList;