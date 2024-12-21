import React, { useState } from "react";

function Slides({ slides }) {
  const [index,setIndex] = useState(0);
  const resetIndex =() => setIndex(0);
  const previousIndex =() => setIndex(Math.max(0,index - 1));
  const nextIndex =() => setIndex(Math.min(slides.length - 1,index + 1));

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" disabled={index === 0} onClick={resetIndex}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" disabled={index === 0} onClick={previousIndex}>
          Prev
        </button>
        <button data-testid="button-next" className="small" disabled={slides.length -1 === index} onClick={nextIndex}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">{slides[index].text}</p>
      </div>
    </div>
  );
}

export default Slides;
