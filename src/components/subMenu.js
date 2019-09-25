import React from "react"
const SubMenu = props => {
  //  if(!activeNavItem === null) {
  //   document.getElementsByClassName("active")[0].style.display = "flex"
  // }
  return (
    <ul
      className={props.activeNavItem === props.index ? "active subMenu displayFlex" : "subMenu displayNone"}
      id={props.id}
    >
      {props.items.map((subItem, index) => (
        <li>
          <a className="subMenuItem" href={subItem.url}>
            {subItem.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
export default SubMenu
