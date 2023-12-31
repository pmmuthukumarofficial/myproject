import React, { useState } from "react";
import { login, logout } from "./Store";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <div>
      {username}<br></br>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
         Login
      </button>
      <button onClick={() => dispatch(logout())}> Logout </button>
    </div>
  );
};

export default Profile