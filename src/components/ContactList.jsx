/** @format */

import React, { useState } from "react";
import UserService from "../service/UserService";

const ContactList = (props) => {
  let [state, setState] = useState({
    contacts: UserService.getContactList(),
  });
  let { contacts } = state;
  const clickContact = (contact) => {
    props.sendContact(contact);
  };
  return (
    <React.Fragment>
      <table className="table table-striped text-center table-hover">
        <thead className="bg-dark text-white">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Company</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <tr key={contact.id} onClick={() => clickContact(contact)}>
                  <th scope="row">
                    {contact.id.substring(contact.id.length - 5)}
                  </th>
                  <td>{contact.name}</td>
                  <td>{contact.age}</td>
                  <td>{contact.gender}</td>
                  <td>{contact.company}</td>
                  <td>{contact.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ContactList;
