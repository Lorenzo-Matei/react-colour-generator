import { useEffect, useState } from "react";

export default function ColourGenerator() {
  const [typeOfColour, setTypeOfColour] = useState("hex");
  const [Colour, setColour] = useState("#dddddd");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length); // generates a random number between 0 and the length of the hex array
  }

  function handleCreateRandomHexColour() {
    // #123456
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //numbers 1 -> 9 and letter A -> F
    let hexColour = "#";
    for (let hex_length = 0; hex_length < 6; hex_length++) {
      hexColour += hex[randomColourUtility(hex.length)]; // the random number (0 and 16) then is used as an index to pick out a hex char
      // the hex char is then appended to the existing string until
    }

    setColour(hexColour);
  }

  function handleCreateRandomRGBColour() {
    const r = randomColourUtility(250);
    const g = randomColourUtility(250);
    const b = randomColourUtility(250);

    setColour(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColour === "rgb") {
      handleCreateRandomRGBColour();
    } else {
      handleCreateRandomHexColour();
    }
  }, [typeOfColour]);

  return (
    <div
      className="container"
      style={{ width: "90vw", height: "90vh", background: Colour }}
    >
      <button
        onClick={() => {
          setTypeOfColour("rgb");
        }}
      >
        Generate RGB Colour
      </button>
      <button
        onClick={() => {
          setTypeOfColour("hex");
        }}
      >
        Generate Hex Colour
      </button>
      <button
        onClick={
          typeOfColour === "hex"
            ? handleCreateRandomHexColour
            : handleCreateRandomRGBColour
        }
      >
        Generate Random Colour
      </button>
      <div className="colour-name">
        <h3>{typeOfColour === "rgb" ? "RBG Colour" : "HEX Colour"}</h3>
        <h1>{Colour}</h1>
      </div>
    </div>
  );
}
