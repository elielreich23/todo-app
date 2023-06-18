// import { useState } from 'react'
import "./style.scss";
import { iconData } from "./iconData";
import { useState } from "react";

const Sidebar = () => {
  // const [btnstate, setBtnstate] = useState(false)
  // function handleClick() {
  //     setBtnstate = (btnstate >= !btnstate)
  // }
  // let toggleClass = btnstate ? 'active' : null;

  return (
    <>
      <div className="sideContainer">
        <div className="blackpane">
          {iconData.map((x) => {
            return (
              <img src={x.url} alt={x.altText} title={x.title} key={x.title} />
            );
          })}
        </div>
        <div className="whitepane">
          <div className="whitepane-heading">
            <h1>Projects</h1>
            <div className="plus">+</div>
          </div>
          <Dropdown className={"drop"}>
            <div className="ul">
              <ul>
                <li>This</li>
                <li>That</li>
              </ul>
            </div>
          </Dropdown>
          <Dropdown className={"drop"}>
            <ul>
              <li>This</li>
              <li>That</li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

export function Dropdown({ children, className }) {
  const [openDrop, setOpenDrop] = useState(false);
  function handledrop() {
    setOpenDrop(!openDrop);
  }
  return (
    <>
      <div className={className} onClick={handledrop}>
        <div>This</div>
        <div className="arrow">{openDrop ? "^" : ">"}</div>
      </div>
      {openDrop && children}
    </>
  );
}
