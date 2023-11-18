import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-[50px]">
      <Link href="/api/auth/signin/credentials">LOGIN</Link>
      <Link href="/register">REGISTER</Link>
      <Link href="/api/auth/signout/credentials">LOGOUT</Link>
    </nav>
  );
};

export default Navbar;
