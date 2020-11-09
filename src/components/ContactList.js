import React from "react";
import "./Contact.css";

const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: true
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true
  }
];

const ContactList = () => (
  <div>
    {users.map((item) => (
      <div className="Contact">
        <img className="avatar" src={item.avatar} alt={item.name} />
        <div>
          <div className="status">
            <h4 className="name">{item.name}</h4>
            <div className="status-online"></div>
            <div className="status-text">
              {item.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default ContactList;
