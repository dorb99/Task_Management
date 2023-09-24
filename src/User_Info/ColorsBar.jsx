import { useEffect, useState } from "react";

function ColorsBar() {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    console.log(colors);
  }, [colors]);
  return (
    <>
      <select
        onChange={(e) => {
          const newColor = e.target.value;
          setColors((prevColors) => [
            ...prevColors,
            { Color: newColor, description: null },
          ]);
        }}
      >
        <option value="white" style={{ backgroundColor: "white" }}>
          white
        </option>
        <option value="red" style={{ backgroundColor: "red" }}>
          red
        </option>
        <option value="green" style={{ backgroundColor: "green" }}>
          green
        </option>
        <option value="blue" style={{ backgroundColor: "blue" }}>
          blue
        </option>
        <option value="brown" style={{ backgroundColor: "brown" }}>
          brown
        </option>
        <option value="yellow" style={{ backgroundColor: "yellow" }}>
          yellow
        </option>
        <option value="purple" style={{ backgroundColor: "purple" }}>
          purple
        </option>
        <option value="teal" style={{ backgroundColor: "teal" }}>
          teal
        </option>
        <option value="pink" style={{ backgroundColor: "pink" }}>
          pink
        </option>
      </select>
      <ul>
      {colors.map((color, index) => (
  <li key={index}>
    {color.Color}, {color.description ? (
      color.description
    ) : (
      <input
        type="text"
        onChange={(e) => {
          const newDescription = e.target.value;
          setColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[index] = { ...updatedColors[index], description: newDescription };
            return updatedColors;
          });
        }}
      />
    )}
  </li>
))}
      </ul>
    </>
  );
}
export default ColorsBar;
