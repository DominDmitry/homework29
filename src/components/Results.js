import React, { useState } from "react";

const Result = ({ counters }) => {
    const [showResult, setShowResult] = useState(false);

    const handleShowResult = () => {
        setShowResult(true);
    };

    const getMaxVotesIndex = () => {
        let maxIndex = 0;
        for(let i = 1; i <counters.length; i++) {
            if(counters[i] > counters[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    };

    const maxVotesIndex = getMaxVotesIndex();
    const maxVotesImgSrc = `/img/smile${maxVotesIndex + 1}.png`;

    return (
        <div>
            <button onClick={handleShowResult}>Show Results</button>
            {showResult && counters[maxVotesIndex] > 0 && (
                <div>
                    <h3>Winner:</h3>
                    <img src={maxVotesImgSrc} alt="Winner" />
                </div>
            )}
        </div>
    )
}

export default Result;