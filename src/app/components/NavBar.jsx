const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex justify-between w-60 px-5 py-2 bg-gray-900 rounded-3xl mt-2">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
