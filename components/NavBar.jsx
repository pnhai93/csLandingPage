import React from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import { BsCart3  } from "react-icons/bs";
import { BsList } from "react-icons/bs";

const NavBar = () => {
  return (
    <header>
      <label htmlFor="btn" className="nav__bars-btn">
        <BsList />
      </label>
      <nav className="nav__pc">
        <div className="menu_list">
          <NavItem text="Home" href="/"></NavItem>
          <NavItem text="Our story" href="#ourStory"></NavItem>
          <NavItem text="Products" href="#products"></NavItem>
          <div>
            <Image src="/logo.png" width={200} height={100}></Image>
          </div>
          <NavItem text="Recipes" href="#recipes"></NavItem>
          <NavItem text="Gallery" href="#gallery"></NavItem>
          <NavItem text="Where to buy" href="#whereToBuy"></NavItem>
        </div>
      </nav>

      <input style={{ display: "none" }} type="checkbox" id="btn"></input>

      <label htmlFor="btn" id="overlay" className="nav__overlay"></label>
      <nav id="navMobile" className="nav__mobile">
        <label htmlFor="btn" className="nav__mobile-close">
          <Image src={"/close.svg"} height={28} width={28}></Image>
        </label>
        <ul className="nav__moblie-list">
          <li>
            <Image src="/logo.png" width={200} height={100}></Image>
          </li>
          <li>
            <a href="/" className="nav__mobile_link">
              Home
            </a>
          </li>
          <li>
            <a href="#ourStory" className="nav__mobile_link">
              Our story
            </a>
          </li>
          <li>
            <a href="#products" className="nav__mobile_link">
              Products
            </a>
          </li>
          <li>
            <a href="#recipes" className="nav__mobile_link">
              Recipes
            </a>
          </li>
          <li>
            <a href="#gallery" className="nav__mobile_link">
              Gallery
            </a>
          </li>
          <li>
            <a href="#whereToBuy" className="nav__mobile_link">
              Where to buy
            </a>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <BsCart3 />
      </div>
    </header>
  );
};

export default NavBar;
