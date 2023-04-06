import Image from 'next/image'
import componentStyles from './styles.module.scss'
import Link from 'next/link'
import varStyles from '@styles/vars.module.scss'
import SocialIcons from '@components/ContentComponents/SocialIcons'

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function Footer({ children, home }) {
  return (
    <>
    <footer className={componentStyles.footer}>
        
        <Link href="/">
          <Image
            priority
            src="/images/planet-caravan-studios-logo.png"
            className={componentStyles.logo}
            height={100}
            width={100}
            alt={name}
          />
        </Link>
        <div className={componentStyles.social}>
          <SocialIcons
            instagram="#"
            facebook="#"
            twitter="#"
            tumblr="#"
            pinterest="#"
          />
        </div>
        
      </footer>      
    </>
  )
}
