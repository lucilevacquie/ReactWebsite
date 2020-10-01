import React from "react";
import linkedinIcon from "../../assets/linkedIn.png";
import facebookIcon from "../../assets/facebook-icon.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";
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

const ShareMobile = () => {
  return (
    <div id="share-mobile-container">
      <div id="content">
        <p>Share</p>
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
  );
};

export default ShareMobile;
