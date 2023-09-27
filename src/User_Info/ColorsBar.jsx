import { useContext, useEffect, useState } from "react";
import { UserContext } from "../General_Components/Other/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function ColorsBar() {
  const { user, setUserInfo, userInfo, setChanged } = useContext(UserContext);
  const [colorsLegened, setColorsLegened] = useState(userInfo?.colors || []);
  const [newColorLegend, setNewColorLegend] = useState({
    color: "",
    description: "",
  });
  const handleAddColor = () => {
    const updatedcolorsLegened =
      colorsLegened?.length > 0 ? [...colorsLegened] : [];
    updatedcolorsLegened.push({
      color: newColorLegend.color,
      description: newColorLegend.description,
    });
    setColorsLegened(updatedcolorsLegened);
    setNewColorLegend({ color: "", description: "" });
    setUserInfo({ ...userInfo, colors: updatedcolorsLegened });
    setChanged(true);
  };

  const handleDeleteColor = (index) => {
    const updatedcolorsLegened = [...colorsLegened];
    updatedcolorsLegened.splice(index, 1);
    setColorsLegened(updatedcolorsLegened);
    setUserInfo({ ...userInfo, colors: updatedcolorsLegened });
    setChanged(true);
  };

  useEffect(() => {
      if (userInfo?.hasOwnProperty("colors")) 
        setColorsLegened(userInfo.colors)
  }, [user]);

  useEffect(() => {
    setColorsLegened(userInfo?.colors);
  }, [userInfo]);

  return (
    <>
      <div className="colors_legend">
        <h3>Colors Legend</h3>
        <select
          id="select_Colors"
          onChange={(e) => {
            const newColor = e.target.value;
            setNewColorLegend({ ...newColorLegend, color: newColor });
          }}
          value={newColorLegend.color}
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
        {newColorLegend.color === "" ? null : (
          <input
            placeholder="enter-class"
            id="select_Colors"
            type="text"
            value={newColorLegend.description}
            onChange={(e) =>
              setNewColorLegend({
                ...newColorLegend,
                description: e.target.value,
              })
            }
            onClick={() => {
              if (
                newColorLegend.description !== "" &&
                newColorLegend.color !== ""
              ) {
                handleAddColor();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddColor();
              }
            }}
          />
        )}
        <ul id="colors">
          {colorsLegened?.map((color, index) => (
            <li
              key={index}
              id="li_Colors"
              style={
                color.color === "white" ? null : { backgroundColor: color.color }
              }
            >
              {color.color}: {color.description}
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
