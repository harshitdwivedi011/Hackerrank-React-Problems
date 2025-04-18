import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let greenTimer, redTimer, yellowTimer;

    const startCycle = () => {
      setActiveIndex(0); // Green
      greenTimer = setTimeout(() => {
        setActiveIndex(2); // Red after 2 mins
        redTimer = setTimeout(() => {
          setActiveIndex(1); // Yellow after 30 sec
          yellowTimer = setTimeout(() => {
            startCycle(); // Loop again
          }, 10000); // 10 sec yellow
        }, 30000); // 30 sec red
      }, 12000); // 2 min green
    };

    startCycle();

    return () => {
      clearTimeout(greenTimer);
      clearTimeout(redTimer);
      clearTimeout(yellowTimer);
    };
  }, []);
  const toggleColor = () => {
    let nextIndex = (activeIndex + 1) % 3;
    setActiveIndex(nextIndex);
  };
  return (
    <div className="container">
      <h2>Traffic Signal</h2>
      <section>
        <div className={`greenLight ${activeIndex === 0 ? "" : "initial"}`}>
          Green
        </div>
        <div className={`yellowLight ${activeIndex === 1 ? "" : "initial"}`}>
          Yellow
        </div>
        <div className={`redLight ${activeIndex === 2 ? "" : "initial"}`}>
          Red
        </div>
        <button onClick={toggleColor}>Change Light</button>
      </section>
    </div>
  );
}

export default App;

// create a traffic light component with green, yellow, and red lights.
// On Clicking a button, the light should change.
// Initially, it should show green. After 2 mints,
// it should automatically switch to red for 30 seconds,
// then yellow for 10 seconds. And Repeat this cycle continuously.
