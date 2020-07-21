import React, { useState } from "react";
import { useParams, useHistory} from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  id: 1,
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, colorSetter }) => {
  
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const params = useParams();
  const { id } = useParams();
  const history = useHistory()

 

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };



console.log('here', colorToEdit)


    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?

    const saveEdit = e => {

      e.preventDefault()
      axiosWithAuth()
        .put(`/colors/${colorToEdit.id}`, colorToEdit)
        .then(res => {
          console.log(res.data)
          
          colorSetter()
          
        })
        .catch(err => console.log(err));
    };
    // history.push(`/deleted`);
  // history.push(`/colors/${id}`);

  const deleteColor = e => {
    axiosWithAuth()
        .delete(`/colors/${colorToEdit.id}`)
        .then(res => {
          console.log(res.data)
          colorSetter()
        })
        .catch(err => console.log(err));
    };
  

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    // e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;



