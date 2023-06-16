// import { useState } from 'react'
import "./style.scss";
import { iconData } from "./iconData";

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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
