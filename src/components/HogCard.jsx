import React, {useState} from "react";

function HogCard({hog, hideDetails}) {
    const [showDetails, setShowDetails] = useState(false);
    
    const handleToggleDetails = () => setShowDetails((prev) => !prev);
    const handleHide = () => hideDetails(hog.name);
   
    return (
    <div aria-label="hog card" className="ui card" onClick={handleToggleDetails}>
        <img src={hog.image} alt={`Photo of ${hog.name}`} />
        <h3>{hog.name}</h3>
        {showDetails ? <div>
            <p>{`Specialty: ${hog.specialty}`}</p>
            <p>{`${hog.weight}`}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{`${hog["highest medal achieved"]}`}</p>
        </div> : <></>}
        <button onClick={handleHide}>
                Hide Me
        </button>
    </div>
    );
}

export default HogCard;