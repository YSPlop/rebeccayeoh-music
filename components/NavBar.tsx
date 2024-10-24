"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Logo } from "./Logo";
import { useState } from "react";
import BentoCard from "./BentoCard";

const NavBar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', imageSrc: '/nav-bar/home.jpg' }, // Replace with your actual image paths
    { href: '/about', label: 'About', imageSrc: '/nav-bar/projects.webp' },
    { href: '/contact-us', label: 'Contact', imageSrc: '/nav-bar/contact-me.gif' },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white"
    >

      {/* Hamburger menu */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>


      {/* logo */}
      <NavbarContent className=" pr-3" justify="center">
        <NavbarBrand>
          <Logo />

        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map(({ href, label }) => (
          <NavbarItem key={href}>
            <Link href={href} className="relative group text-inherit no-underline">
              {label}
              {/* Simple underline on hover */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="bg-black/30 text-white sm:hidden">
        {navLinks.map(({ href, label, imageSrc }, index) => (
          <NavbarMenuItem key={`${href}-${index}`}>
            <BentoCard href={href} label={label} imageSrc={imageSrc} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default NavBar;