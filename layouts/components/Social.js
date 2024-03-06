import {
  IoLogoDiscord,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { BiLogoDiscord, } from "react-icons/bi";
import { FaTelegram, } from "react-icons/fa";

const Social = ({ source, className }) => {
  const {
    facebook,
    twitter,
    instagram,
    discord,
    telegram,
    zealy,
  } = source;
  return (
    <ul className={className}>
      {twitter && (
        <li className="inline-block">
          <a
            aria-label="twitter"
            href={"https://twitter.com/solgor_official"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTwitter />
          </a>
        </li>
      )}
      {instagram && (
        <li className="inline-block">
          <a
            aria-label="instagram"
            href={"https://www.instagram.com/solgorthegorilla"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoInstagram />
          </a>
        </li>
      )}
      {telegram && (
        <li className="inline-block">
          <a
            aria-label="telegram"
            href={"https://t.me/+AUYRKvHXSCEwNjdi"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaTelegram />
          </a>
        </li>
      )}
      {discord && (
        <li className="inline-block">
          <a
            aria-label="discord"
            href={"https://discord.gg/CJjnDahRXK"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <BiLogoDiscord />
          </a>
        </li>
      )}
      {facebook && (
        <li className="inline-block">
          <a
            aria-label="facebook"
            href={"https://www.facebook.com/solgor.official/"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFacebook />
          </a>
        </li>
      )}
      {zealy && (
        <li className="inline-block">
          <a
            aria-label="zealy"
            href={"https://zealy.io/c/solgorgor"}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoZealy />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
