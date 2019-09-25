import React, { useState } from "react"
import SubMenu from "./subMenu"
import logo from "../assets/images/logo.png"
import hamburger from "../assets/images/toggle-open.svg"
import chevron from "../assets/images/chevron-down.svg"
import close from "../assets/images/toggle-close.svg"
import navData from "../data/nav.json"
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState(null)
  const menuClickHandler = () => {
    setIsMenuOpen({ isMenuOpen: !isMenuOpen })
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
  // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  // const handleClick = () => {
  //   setIsSubMenuOpen(!isSubMenuOpen)
  //   if (isSubMenuOpen === true) {
  //     document.getElementById(id).style.display = "flex"
  //   } else {
  //     document.getElementById(id).style.display = "flex"
  //   }
  // }
  // {
  return (
    <>
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
          <img src={close} alt="Ex Shaped button to close navigation menu" />
        </button>
      </div>
      {/* // Open Hamburger Menu Button  */}
      <button
        className="hamburgerContainer"
        onClick={() => {
          menuClickHandler()
        }}
      >
        <img
          src={hamburger}
          alt="Three parallel horizontal lines to make a hamburger menu icon"
        />
      </button>
      {/* // Mobile Navbar */}
      <nav id="mobileNav">
        <ul>
          {navData.items.map((item, index) => {
            if (!item.items.length > 0) {
              return (
                <li
                  className={
                    activeNavItem === index ? "active noDropDown" : "noDropDown"
                  }
                  // onClick={setActiveNavItem(index)}
                  onClick ={ () => {setActiveNavItem({ index })}
                  // onClick={setState({ activeNavItem: index })}
                  }>
                  ><a href={item.url}>{item.label}</a>
                </li>
              )
            } else {
              return (
                <li
                  className={
                    activeNavItem === index
                      ? "active subMenuOutter"
                      : "subMenuOutter"
                  }
                  onClick ={ () => {setActiveNavItem({ index })}}
                >
                  >
                  <div className="chevronContainer">
                    <a href={item.url}>{item.label}</a>
                    <img
                      className="chevronIcon"
                      src={chevron}
                      alt="chevron for opening and closing drop down menu"
                      // onClick={() => {
                      //   handleClick(id)
                      // }}
                    />
                  </div>
                  <SubMenu id={item.label} items={item.items} />
                </li>
              )
            }
          })}
        </ul>
      </nav>
    </>
  )
}
export default Navigation
