import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const phrases = [
  "No",
  "Are You Sure ???? ",
  "Really Sure ????",
  "Pookie Please",
  "You are breaking my heart",
  "Are you absolutely certain?",
  "Change of heart?",
  "That will hurt me tho so you sure ?"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYespressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kisses"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">❤️❤️❤️Yaaaaaaaaaay❤️❤️❤️</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <div className="text-holder">Will You Be My Valentine ???? </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYespressed(true)}
            >
              Yes
            </button>

            <button onClick={handleNoClick} className="no-button">
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
