/** @format */
/** @format */

import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";

const UserList = () => {
  let [state, setState] = useState({
    users: [],
  });
  useEffect(() => {
    UserService.getAllUser()
      .then((response) => {
        setState(() => ({
          users: response.data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let { users } = state;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3">User List</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae, minima tempora similique consequatur architecto
              molestias cum laudantium, consectetur debitis, aperiam quasi. Ex
              perferendis odit amet tempora, nisi itaque nulla perspiciatis?
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <table class="table table-striped table-hover text-center">
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col">SNO</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Street</th>
                  <th scope="col">City</th>
                  <th scope="col">Website</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                        <td>{user.address.city}</td>
                        <td>{user.website}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserList;
