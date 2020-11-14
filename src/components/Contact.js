import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    state = {
    online : false,
  }

  render () {
  return (
    <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name} />

      <div className="status">
        <h4 className="name">{this.props.name}</h4>
        <span onClick={(event) => {
          const offline = !this.state.online;
          this.setState({online: offline});
        }}
        >
        <div
            className={this.state.online ? "status-online" : "status-offline"}
          ></div> 
        <p className="status-text">{this.state.online ? "online" : "offline"} 
        </p></span>
        
        
      </div>
    </div>
  );
 }
}

export default Contact;
