
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState} from 'react'


const loginParts = {
  username: '',
  password: '',

};


const Login = (props) => {
    const history = useHistory();
    const [loginUser, setLoginUser] = useState(loginParts)
 

    const login = e => {
      e.preventDefault();
      axiosWithAuth()
      axios
        .post("http://localhost:5000/api/login", loginUser)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.payload);
          history.push("/bubblepage");
        })
        .catch(err => console.log({ err }));
    };

    const changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;
      setLoginUser({
        ...loginUser,
        [ev.target.name]: value
      });
    };

    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={loginUser.username}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            value={loginUser.password}
            onChange={changeHandler}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }

export default Login;