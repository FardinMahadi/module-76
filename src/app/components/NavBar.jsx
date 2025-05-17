import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-center">
        <ul className="flex justify-between w-60 px-5 py-2 bg-gray-900 rounded-3xl mt-2">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
