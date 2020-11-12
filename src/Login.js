import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./Reducer";

function Login() {
  // eslint-disable-next-line no-empty-pattern
  const [{} , dispatch]= useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result)=> {
      dispatch({
        type : actionTypes.SET_USER,
        user : result.user,
      })
    })
  
    .catch((error)=> alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="./logo.jpg" alt="" />
        <div className="login__text">
          <h1>
            Sign In To Barta
          </h1>
        </div>
        <Button onClick={signIn}>Sign in With GOOGLE</Button>
      </div>
    </div>
  );
}

export default Login;
