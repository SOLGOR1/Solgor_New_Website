import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDiscord,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
  IoLogoStackoverflow,
  IoLogoTelegram,
  IoLogoZealy,
} from "react-icons/io5";
import { 
  BiLogoDiscord 
} 
from "react-icons/bi";

const Social = ({ source, className }) => {
  const {
    facebook,
    stackoverflow,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    discord,
    slack,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
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
            <IoLogoTelegram />
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
