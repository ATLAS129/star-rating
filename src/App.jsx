import { useState } from "react";
import "./styles.css";
import { MdStarRate } from "react-icons/md";

export default function App() {
  const [selectedClickStarId, setSelectedClickStarId] = useState(null);
  const [selectedHoverStarId, setSelectedHoverStarId] = useState(null);

  return (
    <div className="App">
      <div className="stars">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <MdStarRate
              size={100}
              key={index}
              style={{
                color:
                  selectedClickStarId !== null || selectedHoverStarId != null
                    ? selectedClickStarId >= index ||
                      selectedHoverStarId >= index
                      ? "#ffde59"
                      : ""
                    : "",
              }}
              onClick={() => setSelectedClickStarId(index)}
              onMouseEnter={() => setSelectedHoverStarId(index)}
              onMouseLeave={() => setSelectedHoverStarId(null)}
            />
          ))}
      </div>
      <button onClick={() => setSelectedClickStarId(null)} className="reset">
        Reset
      </button>
    </div>
  );
}
