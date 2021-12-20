/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext } from "react";
import { ThemeContext } from "../../context";
import "./sidebar.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const SideBar = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const nightModeHandler = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  const collapseHandler = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#555559" : "",
        color: darkMode && "white",
      }}
      className="sidebarContainer"
    >
      <span onClick={collapseHandler} className={isCollapse ? "menu" : "offer"}>
        <AiOutlineMenu />
      </span>
      <span
        onClick={collapseHandler}
        className={!isCollapse ? "closeMenu" : "offer"}
      >
        <AiOutlineClose />
      </span>

      {/* 
      <div className={isCollapse ? "nightycollapse" : "nighty"}>
        <button className="nightbtn" onClick={nightModeHandler}>
          <BsFillMoonStarsFill />
        </button>
      </div> */}

      <ul className={isCollapse ? "collapse" : ""}>
        <li
          style={{
            backgroundColor: darkMode ? "#686B74" : "",
            color: darkMode && "white",
          }}
          className="sidebaritems"
        >
          <span>
            <AiOutlineHome />
          </span>
          <a href="#">Home</a>
        </li>
        <li
          style={{
            backgroundColor: darkMode ? "#686B74" : "",
            color: darkMode && "white",
          }}
          className="sidebaritems"
        >
          <span>
            <AiOutlineCalendar />
          </span>
          <a href="#">Calender</a>
        </li>
        <li
          style={{
            backgroundColor: darkMode ? "#686B74" : "",
            color: darkMode && "white",
          }}
          className="sidebaritems"
        >
          <span>
            <BiCategory />
          </span>
          <a href="#">Categories</a>
        </li>
        <li
          style={{
            backgroundColor: darkMode ? "#686B74" : "",
            color: darkMode && "white",
          }}
          className="sidebaritems"
        >
          <span>
            <AiOutlineHeart />
          </span>
          <a href="#">Favorite</a>
        </li>
      </ul>
      <div className="t">
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div
          className="t-button"
          onClick={nightModeHandler}
          style={{ left: theme.state.darkMode ? 0 : 20 }}
        ></div>
      </div>
    </div>
  );
};

export default SideBar;
