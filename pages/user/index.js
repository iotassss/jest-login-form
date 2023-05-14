import { useState } from "react";

const User = () => {
  // ひとまず、isLoggedIn と isAdmin は ソースコード内で直接変更する。
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[isAdmin, setIsAdmin] = useState(false);

  const getMessage = () => {
    if (isLoggedIn || isAdmin) {
      return isAdmin ? "Hello, Admin!" : "Hello, User!";
    }
    return "Please log in.";
  };

  return (
    <div>
      <p>{getMessage()}</p>
    </div>
  );
}

export default User;
