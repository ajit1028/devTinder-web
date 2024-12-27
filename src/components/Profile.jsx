import React from "react";
import Edit from "./Edit";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div>
        <Edit user={user} />
      </div>
    )
  );
};

export default Profile;
