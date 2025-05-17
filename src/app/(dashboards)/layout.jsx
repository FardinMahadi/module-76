const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* Side Nav */}
        <div className="col-span-3">User List</div>

        {/* Dashboard Content */}
        <div className="col-span-9"> {children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
