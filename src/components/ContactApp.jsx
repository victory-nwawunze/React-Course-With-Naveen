/** @format */

import React, { useState } from "react";

import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

const ContactApp = () => {
  let [state, setState] = useState({
    selectedContact: {},
  });
  const { selectedContact } = state;
  const recieveContact = (contact) => {
    setState((state) => ({
      selectedContact: contact,
    }));
  };
  return (
    <React.Fragment>
      <pre>{JSON.stringify(selectedContact)}</pre>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="h3 text-success">ContactApp</div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9">
            <ContactList sendContact={recieveContact} />
          </div>
          <div className="col-md-3">
            <ContactCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
