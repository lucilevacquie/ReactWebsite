import React from "react";
import { useState } from "react";
import linkedinIcon from "../../assets/linkedIn.png";
import facebookIcon from "../../assets/facebook-icon.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import shareIcon from "../../assets/sharebutton-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import "./style.scss";

const Data = [
  {
    link:
      "https://www.linkedin.com/shareArticle?url=https://www.lucilevacquie.com/&title=Lucile%20Vacquie",
    img: linkedinIcon,
    label: "LinkedIn",
  },
  {
    link:
      "https://api.whatsapp.com/send?text=Lucile%20Vacquie https://www.lucilevacquie.com/",
    img: whatsappIcon,
    label: "Whatsapp",
  },
  {
    link:
      "https://www.facebook.com/sharer.php?u=https://www.lucilevacquie.com/",
    img: facebookIcon,
    label: "Facebook",
  },
  {
    link:
      "https://twitter.com/share?url=https://www.lucilevacquie.com/&text=Lucile%20Vacquie&via=[via]&hashtags=[hashtags]",
    img: twitterIcon,
    label: "Twitter",
  },
];

const ShareButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="container">
      <div id="button-container" onClick={() => setShow(true)}>
        <p>Share</p>
        <img id="share-icon" src={shareIcon} alt="share-icon" />
      </div>
      <div
        id="modal-container"
        showModal={show}
        onClick={() => setShow(false)}
        style={{ display: show ? "block" : "none" }}
      >
        <div id="modal" onClick={(e) => e.stopPropagation()}>
          <p id="text">Share it with the world!</p>
          <div id="links">
            {Data.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="icons" src={item.img} alt={item.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareButton;
