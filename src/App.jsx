import { useState, useEffect } from 'react'
import './App.css'
import Tabs from './components/tabs'

function App() {
  const slidingText = " Computer Science Major & Math Minor# Full-Stack Engineer# Mentor & Peer Academic Coach# Research Lead @ LLM Operations Team# Coding Enthusiast & Creator# Avid Hiker, Paddleboarder# Web Developer";
  const numberOfBlinks = 4;
  const writeSpeed = 60;
  const deleteSpeed = 30;
  const blinkTime = 400;

  const [shownMessage, setShownMessage] = useState("");
  const [opacity, setOpacity] = useState(1);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const changeOpacity = () => {
    setOpacity((opacity) => (opacity === 1 ? 0 : 1));
  };

  const typeMessage = async (text) => {
    for (let i = 0; i < text.length; i++) {
      setShownMessage((prev) => prev + text[i]);
      await sleep(writeSpeed);
    }
  };

  const deleteMessage = async (text) => {
    for (let i = text.length; i >= 0; i--) {
      setShownMessage((prev) => prev.slice(0, -1));
      await sleep(deleteSpeed);
    }
  };

  const textProcessing = async () => {
    while (true) {
      let message = slidingText;
      setShownMessage("");

      // Loop through each segment
      while (message.includes("#")) {
        const segment = message.slice(0, message.indexOf("#"));

        // Type out the segment
        await typeMessage(segment);
        for (let i = 0; i < numberOfBlinks; i++) {
          await sleep(blinkTime);
          changeOpacity();
        }

        // Delete the segment
        await deleteMessage(segment);
        for (let i = 0; i < numberOfBlinks; i++) {
          await sleep(blinkTime);
          changeOpacity();
        }

        // Move to the next part of the text
        message = message.slice(message.indexOf("#") + 1);
      }

      // Type out the last segment
      await typeMessage(message);
      changeOpacity();
      await sleep(4000); // Pause before deleting
      changeOpacity();
      // Delete the last segment
      await deleteMessage(message);
    }
  };

  useEffect(() => {
    textProcessing();
  }, []);

  return (
    <>
      <div className="container">
        <p className="ascii-art">
          Jaydon Bingham
        </p>
        <div className="text-container">
          <h1 className="heading">
            <span className="arrow">&lt;</span>
            <span className="tag">h1</span>
            <span className="arrow">&gt;</span>
            <p className="message">{shownMessage}</p>
            <p className="cursor" style={{ opacity: opacity }}>|</p>
            <span className="arrow">&lt;</span>
            <span className="tag">/h1</span>
            <span className="arrow">&gt;</span>
          </h1>
        </div>
        <img
          src={"headshot.jpg"}
          className="profile-image"
          alt="Profile"
          width="400"
          height="400"
        />
        <div className="scroll-hint">
          <img src="scroll.png" alt="Scroll down" />
        </div>
      </div>
      <Tabs />
    </>
  )
}

export default App

