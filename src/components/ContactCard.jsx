/** @format */

import React from "react";

const ContactCard = (props) => {
  let { selectedContact } = props;
  return (
    <React.Fragment>
      {Object.keys(selectedContact).length > 0 && (
        <div className="card shadow-lg sticky-top">
          <img src={props.selectedContact.photo} alt={selectedContact.name} />
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Name : {selectedContact.name}</li>
              <li className="list-group-item">
                Gender : {selectedContact.gender}
              </li>
              <li className="list-group-item">
                Company : {selectedContact.company}
              </li>
              <li className="list-group-item">
                Email : {selectedContact.email}
              </li>
              <li className="list-group-item">
                Age : {selectedContact.age} yrs.
              </li>
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ContactCard;
