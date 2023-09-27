import { useContext, useEffect, useState } from "react";
import { UserContext } from "../General_Components/Other/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function ColorsBar() {
  const { user } = useContext(UserContext);
  const [colors, setColors] = useState([]);
  const [newColor, setNewColor] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddColor = () => {
    setColors((prevColors) => [
      ...prevColors,
      { Color: newColor, description: newDescription },
    ]);
    setNewColor("");
    setNewDescription("");
  };

  const handleDeleteColor = (index) => {
    setColors((prevColors) => {
      const updatedColors = [...prevColors];
      updatedColors.splice(index, 1);
      return updatedColors;
    });
  };
  useEffect(() => {
    const oldcolors = JSON.parse(localStorage.getItem(`${user}-colors`));
    if (oldcolors) {
      setColors(oldcolors);
    }
  }, [user]);

  useEffect(() => {
    if (colors.length > 0) {
      localStorage.setItem(`${user}-colors`, JSON.stringify(colors));
    }
  }, [colors]);

  return (
    <>
      <div className="colors_legend">
        <h3>Colors Class</h3>
        <select
          id="select_Colors"
          onChange={(e) => {
            const newColor = e.target.value;
            setNewColor(newColor);
          }}
          value={newColor}
        >
               <option value="">Add Color</option>
          <option value="white" style={{ color: "black" ,backgroundColor: "white" }}>
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
        {newColor === "" ? null : (
          <input
            placeholder="enter-class"
            id="select_Colors"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddColor();
              }
            }}
          />
        )}
        <ul id="colors">
          {colors.map((color, index) => (
            <li
              key={index}
              id="li_Colors"
              style={
                color.Color === "white" ? null : { backgroundColor: color.Color }
              }
            >
              {color.Color}: {color.description}{" "}
              <button
                id="delete_Colors"
                onClick={() => handleDeleteColor(index)}
              >
                <FontAwesomeIcon className="icon-trash" icon={faTrashAlt} /> 
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ColorsBar;
