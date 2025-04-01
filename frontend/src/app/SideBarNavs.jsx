

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiChevronDoubleDown, HiOutlineChevronDown, HiOutlineHand, HiOutlineHome, HiShoppingCart } from "react-icons/hi";

const sidebarNavs = [
  {
    id: 1,
    title: "خانه",
    icon: <HiOutlineHome />,
    href: "/",
  },

  {
    id: 2,
    title: "محصولات",
    icon: <HiShoppingCart />,
    href: "/products",
  },
  {
    id: 3,
    title: "ارطبات با ما",
    icon: <HiOutlineChevronDown />,
    href: "/",
  },


];

export default function SideBarNavs({ onClick }) {
  // const router = useRouter();
  const pathname = usePathname()
  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        const isActive = pathname === nav.href
        return (
          <li key={nav.id}>
            <Link
              onClick={onClick}
              href={nav.href}
              className={`flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-4,
                ${isActive && "bg-primary-100/40 !font-bold text-primary-900 px-2"

                }
              `}
            >
              <span className="border rounded-lg p-0.5"> {nav.icon}</span>
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul >
  );
}
