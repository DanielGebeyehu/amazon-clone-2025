import React, { useState, useContext } from "react";
import classes from "../Auth/SignUp.module.css";
import Layout from "../../Layout/Layout";
import { Link, useNavigate } from "react-router";
import { auth } from "../../Utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          setLoading({ ...loading, signUp: true });
          navigate("/");

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  console.log(password, email);
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* {logo} */}
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            className={classes.login__signInButton}
            name="signin"
          >
            {loading.signIn ? (
              <ClipLoader color="#0000" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          Sale. Please see our privacy Notice, out Cookies Notice and out
          Inerest-Based Ads Notice
        </p>
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#0000" size={15} />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
