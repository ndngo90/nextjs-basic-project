import Link from "next/link";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/query", label: "query" },
];
const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="nav-bar mx-auto hidden max-w-6xl px-8 sm:flex sm:items-center sm:space-x-8">
        <Link href="/" className="btn btn-outline text-3xl">
          NEXT
        </Link>
        <ul className="menu menu-horizontal">
          <li className="text-xl">
            <Link href="/about">About</Link>
          </li>
          {links.map((link) => {
            return (
              <li className="text-xl capitalize">
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
