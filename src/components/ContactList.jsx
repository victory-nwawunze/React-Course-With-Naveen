/** @format */

import React, { useState } from "react";
import ContactService from "../services/ContactService";

const ContactList = (props) => {
  const [state, setState] = useState({
    contacts: ContactService.getContactList(),
  });
  let { contacts } = state;
  const ClickContact = (contact) => {
    props.sendContact(contact); //Send data to parent
  };
  return (
    <React.Fragment>
      <p className="h1">Welcome to ContactList</p>
      <table className="table table-hover text-center table-striped">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <tr key={contact.id} onClick={() => ClickContact(contact)}>
                  <td>{contact.id.substring(contact.id.length - 5)}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.gender}</td>
                  <td>{contact.company}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ContactList;
