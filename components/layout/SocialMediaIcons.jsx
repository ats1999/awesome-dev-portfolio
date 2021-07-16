import React from "react";
import socialMediaIcons from "@config/socialMedia";

export default function SocialMediaIcons() {
  return (
    <ul className="social-media-icons">
      {socialMediaIcons.map((media) => (
        <li key={media.name}>
          <a href={media.link}>
            <img src={media.icon} alt={media.name} height="40px" width="40px" />
          </a>
        </li>
      ))}
    </ul>
  );
}
