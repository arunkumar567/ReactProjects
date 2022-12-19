import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading =() => {
    
return(
  <>
  <ClipLoader
        color={"#0096FF	"}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </>
)
}

export default Loading