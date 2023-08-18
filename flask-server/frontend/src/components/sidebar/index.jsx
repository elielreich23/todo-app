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
          <Dropdown name={"Team"} className={"drop"}></Dropdown>
          <Dropdown name={"Projects"} className={"drop"}>
            <div className="listStyle">
              <img className="lines" src="/assets/Lines.svg" alt="" />
              <ul>
                <li className="first">All projects</li>
                <li className="second">Design System</li>
                <li className="third">User flow</li>
                <li className="fourth">Ux research</li>
              </ul>
            </div>
          </Dropdown>
          <Dropdown name={"Tasks"} className={"drop"}>
          <div className="listStyle">
              <img className="lines" src="/assets/Lines.svg" alt="" />
              <ul>
                <li className="first">All tasks</li>
                <li className="second">To do</li>
                <li className="third">In progress</li>
                <li className="fourth">Done</li>
              </ul>
            </div>
          </Dropdown>
          <Dropdown name={"Reminders"} className={"drop"}></Dropdown>
          <Dropdown name={"Messengers"} className={"drop"}></Dropdown>
        </div>
        {/* 
        add style for logout button
        <div className="logout">
          <img classname="log-btn" src="/assets/log.svg" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;

export function Dropdown({ name, children, className }) {
  const [openDrop, setOpenDrop] = useState(false);
  function handledrop() {
    setOpenDrop(!openDrop);
  }
  return (
    <>
      <div className={className} onClick={handledrop}>
        <div className="droptext">{name}</div>
        <img
          src={openDrop ? "/assets/arrowdown.svg" : "/assets/arrowside.svg"}
          alt="arrow"
        />
      </div>
      {openDrop && children}
    </>
  );
}
