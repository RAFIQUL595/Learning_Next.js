import React from "react";

const UserLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="grid-cols-3">user</div>
        <div className="grid-cols-9">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;