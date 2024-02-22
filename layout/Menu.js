import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

const DropdownBtn = () => (
  <div className="dropdown-btn">
    <span className="fas fa-chevron-down" />
  </div>
);
const MultiMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="navigation clearfix">
      {menuItems.map(({path, name}) => (
        <li key={name}>
          <Link href={path} className={pathname === path ? 'active' : ''}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MultiMenu;
