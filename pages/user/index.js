import { useState } from "react";

const User = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[isAdmin, setIsAdmin] = useState(false);

  const getMessage = () => {
    if (isLoggedIn) {
      return isAdmin ? "Hello, Admin!" : "Hello, User!";
    }
    return "Please log in.";
  };

  return (
    <div>
      <p>{getMessage()}</p>
      <div>
        login/out:
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      </div>
      <div>
        admin/user:
        <button onClick={() => setIsAdmin(true)}>Log in as Admin</button>
        <button onClick={() => setIsAdmin(false)}>Log in as User</button>
      </div>
    </div>
  );
}

export default User;
