import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const navTitles = [
  {
    link: "/",
    text: "About me",
  },
  {
    link: "/experiences",
    text: "Experiences",
  },
  {
    link: "/education",
    text: "Education",
  },
  {
    link: "/interests",
    text: "Interests",
  },
  {
    link: "/contact",
    text: "Contact",
  },
];

class Navbar extends React.Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div className="navBar">
        <ul className={this.state.toggle ? "navLinks" : "navLinks"}>
          {navTitles.map((objLink, i) => {
            return (
              <li className="links" key={i}>
                <Link to={objLink.link}>{objLink.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Navbar;
