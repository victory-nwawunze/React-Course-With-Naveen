/** @format */

import React, { useState } from "react";
import UserService from "../service/UserService";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

const ContactApp = () => {
  let [state, setState] = useState({
    selectedContact: {},
  });

  let recievedContact = (contact) => {
    setState((state) => ({
      selectedContact: contact,
    }));
  };
  let { selectedContact } = state;
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(selectedContact)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3">ContactApp</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              modi unde enim temporibus ducimus recusandae nam, ipsam assumenda
              vitae adipisci cupiditate eveniet, cum in aspernatur voluptatem
              veniam, quasi molestiae. Harum!
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9">
            <ContactList sendContact={recievedContact} />
          </div>
          <div className="col-md-3">
            <ContactCard selectedContact={selectedContact} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
