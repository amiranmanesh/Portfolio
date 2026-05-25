import React, { useEffect, useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

function AnimatedSplash() {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRedirect(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return redirect ? <Redirect to="/home" /> : <AnimatedSplash />;
}

export default Splash;
