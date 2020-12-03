import React from "react";
import {Link} from "react-router-dom"
import "./SystemFrame.css";

const SystemFrame = ({ children }) => (
  <div>
    <div className="system-frame__nav">
      <Link className="system-frame__nav-item" to="/">Home</Link>
      <Link className="system-frame__nav-item" to="/local">Local Game</Link>
    </div>
    {children}
  </div>
);

export default SystemFrame;
