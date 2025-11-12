import { useState } from 'react'
import LanguageMenu from './LanguageMenu'
import { useTranslation } from 'react-i18next'

export function MobileMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMenu}>
          <div className="absolute top-0 right-0 w-64 h-full bg-(--gray-800) shadow-lg transform transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">{t('menu', { ns: 'common' })}</h3>
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-(--orange-500) transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-2 text-lg font-(family-name:--primary-font) text-(--gray-100) hover:text-(--orange-500) transition-colors duration-150">
                <a href="https://shop.omex.gg/" target="_blank">
                  {t('shop', { ns: 'common' })}
                </a>
                <div>
                  {t('ranking', { ns: 'common' })}
                </div>
                <a href="https://discord.gg/yXVHdFyzqS" target="_blank">
                  {t('community', { ns: 'common' })}
                </a>
                <LanguageMenu />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
