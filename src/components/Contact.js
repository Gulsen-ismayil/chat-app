import React from "react";
import "./Contact.css";

const online = true;
const name = "Atacey Reed";
const image = "https://randomuser.me/api/portraits/women/21.jpg";

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" alt="Sracey Reed" src={image} />

      <div className="status">
        <h4 className="name">{name}</h4>
        <div className="status-online"></div>
        <p className="status-text">{online ? "online" : "offline"} </p>
      </div>
    </div>
  );
}

export default Contact;
