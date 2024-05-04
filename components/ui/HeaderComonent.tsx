'use client'
import Image from "next/image";
import { Button } from "./button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderComonent() {
    const pathname = usePathname()
  return (
    <div>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image src="/School_Logo.png" alt="" width={50} height={50} />

        {/* <div>Menu</div> */}
        {/* Login Button */}
        <div className="flex items-center space-x-2 ">
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
          <Button>Sign-In</Button>
        </div>
      </div>

      {/* Mobile View Menu */}
      <div className="flex space-x-4 p-2">
        <Link href="/" className={`${pathname === '/' ? "active_menu_option" : "menu_option_style"}`}>Home</Link>
        <Link href="/product" className={`${pathname === '/product' ? "active_menu_option" : "menu_option_style"}`}>product</Link>
        <Link href="/about" className={`${pathname === '/about' ? "active_menu_option" : "menu_option_style"}`}>About</Link>
      </div>
    </div>
  );
}

export default HeaderComonent;
