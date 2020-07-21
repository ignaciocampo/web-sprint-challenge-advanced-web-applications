import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { Route } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


  const params = useParams();
  const { id } = useParams();



  const colorSetter = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then(res => {

        setColorList(res.data);
        console.log(res.data)
        console.log(res)
        console.log(colorList)
      })
      .catch(err => console.log({ err }));
  };
console.log(colorList)

  return (
    <>




      <ColorList colors={colorList} updateColors={setColorList} colorSetter={colorSetter} />
  
   

      <Bubbles colors={colorList} />
   
      <button class="btn btn-primary" onClick={colorSetter}>Watch Colors</button>

    </>
  );
};

export default BubblePage;
