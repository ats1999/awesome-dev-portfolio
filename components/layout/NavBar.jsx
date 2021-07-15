import Link from "next/link";

import navItems from "@config/navItems";

// https://brittanychiang.com/
export default function NavBar({ children }) {
  return (
    <div className="nav">
      <ul>
        {navItems.map((item) => (
          <li key={item[0]}>
            <Link href={item[1]}>
              <a>{item[0]}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="contents">{children}</div>
    </div>
  );
}
