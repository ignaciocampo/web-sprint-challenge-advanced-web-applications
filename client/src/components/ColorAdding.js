
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState} from 'react'


const initialColor = {
    color: "",
    code: { hex: "" }
  };


const ColorAdding = (props) => {
    const history = useHistory();
    const [colorAdd, setColorAdd] = useState(initialColor)
 

    const colorAdder = e => {
        e.preventDefault();
        axiosWithAuth()
        axios
          .post("http://localhost:5000/api/colors")
          .then(res => {
            console.log(res);
            setColorAdd( res.data);
          })
          .catch(err => console.log({ err }));
        }

          const changeHandler = ev => {
            ev.persist();
            let value = ev.target.value;
            setColorAdd({
              ...colorAdd,
              [ev.target.name]: value
            });
          };

    return (
      <div>
        <form onSubmit={colorAdder}>
          <input
            type="color"
            name="color"
            value={colorAdd.color}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            value={colorAdd.code.hex}
            onChange={changeHandler}
          />
          <button>Add Color</button>
        </form>
      </div>
    );
  }

export default ColorAdding;