import React, { useState } from "react"
import { Link } from "gatsby"
import SubMenu from "./subMenu"
import logo from "../assets/images/logo.png"
import hamburger from "../assets/images/toggle-open.svg"
import chevron from "../assets/images/chevron-down.svg"
import close from "../assets/images/toggle-close.svg"
import navData from "../data/nav.json"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState(null)
  const menuClickHandler = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen === true) {
      document.getElementsByClassName("mobileHeader")[0].style.transform =
        "translateX(0)"
      document.getElementById("mobileNav").style.transform = "translateX(0)"
      document.getElementsByClassName("hamburgerContainer")[0].style.display =
        "none"
    } else {
      document.getElementsByClassName("mobileHeader")[0].style.transform =
        "translateX(-100%)"
      document.getElementById("mobileNav").style.transform = "translateX(-100%)"
      document.getElementsByClassName("hamburgerContainer")[0].style.display =
        "flex"
    }
  }

  const subMenuClickHandler = index => {
    if (activeNavItem === null) {
      setActiveNavItem(index)
    } else {
      setActiveNavItem(null)
    }
  }

  return (
    <header>
      {/* // Slide in log and close menu button */}
      <div className="mobileHeader">
        <div className="logoContainer">
          <img className="logoImg" src={logo} alt="prep network logo" />
        </div>
        <button
          className="closeMenuBtn"
          onClick={() => {
            menuClickHandler()
          }}
        >
          <img
            className="menuIcon"
            src={close}
            alt="Ex Shaped button to close navigation menu"
          />
        </button>
      </div>
      {/* // Open Hamburger Menu Button  */}
      <button
        className="hamburgerContainer"
        id="hamburger"
        onClick={() => {
          menuClickHandler()
        }}
      >
        <img
          className="menuIcon"
          src={hamburger}
          alt="Three parallel horizontal lines to make a hamburger menu icon"
        />
      </button>
      {/* // Mobile Navbar */}
      <nav id="mobileNav">
        <div className="logoContainer">
          <img className="logoImg" src={logo} alt="prep network logo" />
        </div>
        <ul>
          {navData.items.map((item, index) => {
            if (!item.items.length > 0) {
              return (
                <li
                  className="noDropDown"

                  // onClick={() => {
                  //   setActiveNavItem(index)
                  // }}
                >
                  <Link to={item.url}>{item.label}</Link>
                </li>
              )
            } else {
              return (
                <li
                  className="subMenuOutter"
                  onClick={() => {
                    subMenuClickHandler(index)
                  }}
                >
                  <div className="chevronContainer">
                    <a href={item.url}>{item.label}</a>
                    <img
                      className={
                        activeNavItem === index
                          ? "chevronIcon rotateIcon"
                          : "chevronIcon"
                      }
                      src={chevron}
                      alt="chevron for opening and closing drop down menu"
                    />
                  </div>
                  <SubMenu
                    activeNavItem={activeNavItem}
                    index={index}
                    items={item.items}
                  />
                </li>
              )
            }
          })}
        </ul>
      </nav>
    </header>
  )
}
export default Header
