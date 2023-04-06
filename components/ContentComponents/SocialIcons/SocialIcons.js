import React from "react"
import componentStyles from './styles.module.scss'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

export default function SocialIcons({ 
  instagram, facebook, twitter, 
  tumblr, pinterest
}) {
  return (
    <>
      <ul className={componentStyles.list}>
        {instagram && 
          <li className={componentStyles.cell}>
            <a 
              href={instagram}
              className=""
            >
              <FaInstagram />
            </a>
          </li>
        }
        {facebook &&
          <li className={componentStyles.cell}>
            <a 
              href={facebook}
              className=""
            >
              <FaFacebook />
            </a>
          </li>
        }
        {twitter &&
          <li className={componentStyles.cell}>
            <a 
              href={twitter}
              className=""
            >
              <FaTwitter />
            </a>
          </li>
        }
        {tumblr && 
          <li className={componentStyles.cell}>
            <a 
              href={tumblr}
              className=""
            >
              <FaTumblr />
            </a>
          </li>
        }
        {pinterest && 
          <li className={componentStyles.cell}>
            <a 
              href={pinterest}
              className=""
            >
              <FaPinterest />
            </a>
          </li>
        }        
      </ul>
    </>
  )
}

//export default SocialIcons
