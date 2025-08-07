import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="grid-cols-3">admin</div>
        <div className="grid-cols-9">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;