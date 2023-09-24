import { useState } from "react"


function ColorsBar() {
    const [colors, setColors] = useState()
        return(
        <>
        <select
            style={{ backgroundColor: newEvent.color }}
            value={newEvent.color}
            onChange={(e) => {
                const newColor = e.target.value;
                setColors((prevColors) => [...prevColors, newColor]);
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
                </>
    )
}