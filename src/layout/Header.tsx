import { MobileMenu } from '@/components/MobileMenu'
import { PrimaryButton } from '@/components/PrimaryButton'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import LanguageMenu from '@/components/LanguageMenu'
import isotipoVector from '@assets/images/vectors/isotipo.svg'


export default function Header() {
  const { t } = useTranslation();
  const handlePlayGame = () => {
    window.open('fivem://connect/cfx.re/join/3zzzx8', '_blank')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 bg-(--gray-900)">
      <div className="container mx-auto max-w-(--safe-area) flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <img src={isotipoVector} alt="OMEX — Domine o Mapa!" className="w-8 h-8 md:w-auto md:h-auto" />
          <h1 className="text-xl md:text-2xl">OMEX</h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <menu className="flex items-center gap-4">
            <div //Link
              className="flex gap-1 items-center text-lg font-(family-name:--primary-font) text-(--gray-100) opacity-50 cursor-not-allowed"
            // to="/ranking"
            >
              {t(`navigation.ranking`)}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                <path d="M13.512 7.08589V4.96198C13.512 2.47499 11.49 0.449951 8.99997 0.449951C6.51298 0.449951 4.48794 2.47499 4.48794 4.96198V7.08589C3.44693 7.17289 2.62793 8.05189 2.62793 9.11381V11.6459C2.62793 14.9009 5.2739 17.55 8.52889 17.55H9.47089C12.7259 17.55 15.3718 14.9009 15.3718 11.6459V9.11381C15.3718 8.05181 14.553 7.17287 13.512 7.08589ZM6.44097 4.96198C6.58123 1.57124 11.4188 1.57201 11.559 4.96198V7.07706H6.44098L6.44097 4.96198ZM8.28599 12.5491C7.23298 11.8621 7.74674 10.1829 9 10.194C10.2533 10.1835 10.7678 11.8613 9.71402 12.5491C9.63302 12.6031 9.58202 12.6991 9.58202 12.7981V13.8511C9.56252 14.6176 8.43827 14.6191 8.41801 13.8511V12.7981C8.41801 12.6991 8.36699 12.6031 8.28599 12.5491Z" />
              </svg>
            </div>
            <Link
              className="text-lg font-(family-name:--primary-font) text-(--gray-100) hover:text-(--orange-500) transition-colors duration-150"
              to="https://discord.gg/yXVHdFyzqS"
              target="_blank"
            >
              {t(`navigation.community`)}
            </Link>
          </menu>
          <div className="w-fit h-full flex items-center gap-2">
            <PrimaryButton text={t(`navigation.playNow`)} style="whitespace-nowrap" onClick={handlePlayGame} />
            <LanguageMenu />
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}