import { PrimaryButton } from '@/components/PrimaryButton'
import GameModeCard from '@/components/GameModeCard'

import v_logo from '@assets/images/vectors/v_logo.svg'
import five_logo from '@assets/images/vectors/fivem.svg'
import discord_logo from '@assets/images/vectors/discord.svg'
import tiktok_logo from '@assets/images/vectors/tiktok.svg'
import youtube_logo from '@assets/images/vectors/youtube.svg'
import x_logo from '@assets/images/vectors/x.svg'
import instagram_logo from '@assets/images/vectors/instagram.svg'
import { useTranslation } from 'react-i18next'

export default function Connection() {
    const handlePlayGame = () => {
        window.open('fivem://connect/cfx.re/join/3zzzx8', '_self')
    }

    const handleDownloadFiveM = () => {
        window.open('https://fivem.net/', '_blank')
    }

    const handleBuyGame = () => {
        window.open('https://store.steampowered.com/app/271590/Grand_Theft_Auto_V_Legacy/', '_blank')
    }

    const { t } = useTranslation(["connections"]);

    return (
        <section className="relative w-full h-fit mt-8 md:mt-32 px-2 md:px-0">
            <div className="container mx-auto max-w-(--safe-area) h-full flex gap-16">
                <div className="md:visible hidden w-full md:flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <h3 className="text-[1.5rem] text-(--gray-50) leading-[90%]">{t('todo.title', { ns: "connections" })}</h3>
                        <p className="text-[0.875rem] font-semibold text-(--gray-200) leading-[125%] font-(family-name:--secondary-font)">{t('todo.description', { ns: "connections" })}</p>
                    </div>
                    <GameModeCard style="w-full max-h-[5rem] flex items-center justify-between group">
                        <div className="flex items-center gap-2">
                            <img src={v_logo} alt="V" draggable={false} className="w-[3rem] h-auto" />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[1rem] font-extrabold tracking-tight text-(--gray-50) group-hover:text-(--orange-500) leading-[90%] uppercase transition-colors duration-350 ease-in-out">{t('todo.steps.step1.title', { ns: "connections" })}</h3>
                                <p className="max-w-[33rem] text-[0.75rem] font-semibold text-(--gray-200) group-hover:text-(--gray-50) leading-[125%] font-(family-name:--secondary-font) transition-colors duration-350 ease-in-out">{t('todo.steps.step1.description', { ns: "connections" })}</p>
                            </div>
                        </div>
                        <PrimaryButton text={t('navigation.buy', { ns: "common" })} style="px-2 py-1 text-base! w-fit" onClick={handleBuyGame} />
                    </GameModeCard>
                    <GameModeCard style="w-full max-h-[5rem] flex items-center justify-between group">
                        <div className="flex items-center gap-2">
                            <img src={five_logo} alt="V" draggable={false} className="w-[3rem] h-auto" />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[1rem] font-extrabold tracking-tight text-(--gray-50) group-hover:text-(--orange-500) leading-[90%] uppercase transition-colors duration-350 ease-in-out">{t('todo.steps.step2.title', { ns: "connections" })}</h3>
                                <p className="max-w-[33rem] text-[0.75rem] font-semibold text-(--gray-200) group-hover:text-(--gray-50) leading-[125%] font-(family-name:--secondary-font) transition-colors duration-350 ease-in-out">{t('todo.steps.step2.description', { ns: "connections" })}</p>
                            </div>
                        </div>
                        <PrimaryButton text={t('navigation.download', { ns: "common" })} style="px-2 py-1 text-base! w-fit" onClick={handleDownloadFiveM} />
                    </GameModeCard>
                    <GameModeCard style="w-full max-h-[5rem] flex items-center justify-between group">
                        <div className="flex items-center gap-2">
                            <img src={v_logo} alt="V" draggable={false} className="w-[3rem] h-auto" />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[1rem] font-extrabold tracking-tight text-(--gray-50) group-hover:text-(--orange-500) leading-[90%] uppercase transition-colors duration-350 ease-in-out">{t('todo.steps.step3.title', { ns: "connections" })}</h3>
                                <p className="max-w-[33rem] text-[0.75rem] font-semibold text-(--gray-200) group-hover:text-(--gray-50) leading-[125%] font-(family-name:--secondary-font) transition-colors duration-350 ease-in-out">{t('todo.steps.step3.description', { ns: "connections" })}</p>
                            </div>
                        </div>
                        <PrimaryButton text={t('navigation.playNow', { ns: "common" })} style="px-2 py-1 text-base! w-fit" onClick={handlePlayGame} />
                    </GameModeCard>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <h3 className="text-center md:text-left text-[1rem] md:text-[1.5rem] text-(--gray-50) leading-[90%]">{t('joinCommunity.title', { ns: "connections" })}</h3>
                        <p className="text-center md:text-left text-[0.875rem] font-semibold text-(--gray-200) leading-[125%] font-(family-name:--secondary-font)">{t('joinCommunity.description', { ns: "connections" })}</p>
                    </div>

                    <div className="w-full h-full max-h-[5rem] flex gap-4">
                        <a
                            href="https://discord.gg/yXVHdFyzqS"
                            target="_blank"
                            className="w-full h-full"
                        >
                            <GameModeCard style="w-full max-h-[5rem] py-[1.69rem] flex items-center justify-center group">
                                <div className="flex items-center justify-center gap-2">
                                    <img src={discord_logo} alt="V" draggable={false} className="h-[1.5625rem] w-auto" />
                                </div>
                            </GameModeCard>
                        </a>
                        <a
                            href="https://www.tiktok.com/@omexpvp"
                            target="_blank"
                            className="w-full h-full"
                        >
                            <GameModeCard style="w-full max-h-[5rem] py-[1.69rem] flex items-center justify-center group">
                                <div className="flex items-center gap-2">
                                    <img src={tiktok_logo} alt="V" draggable={false} className="h-[1.5625rem] w-auto" />
                                </div>
                            </GameModeCard>
                        </a>
                    </div>

                    <div className="w-full h-full max-h-[5rem] flex gap-4">
                        <a
                            href="https://www.youtube.com/@omexpvp"
                            target="_blank"
                            className="w-full h-full"
                        >
                            <GameModeCard style="w-full max-h-[5rem] py-[1.69rem] flex items-center justify-center group">
                                <div className="flex items-center justify-center gap-2">
                                    <img src={youtube_logo} alt="V" draggable={false} className="h-[1.5625rem] w-auto" />
                                </div>
                            </GameModeCard>
                        </a>
                        <a
                            href="https://x.com/omexpvp"
                            target="_blank"
                            className="w-full h-full"
                        >
                            <GameModeCard style="w-full max-h-[5rem] py-[1.69rem] flex items-center justify-center group">
                                <div className="flex items-center gap-2">
                                    <img src={x_logo} alt="V" draggable={false} className="h-[1.5625rem] w-auto" />
                                </div>
                            </GameModeCard>
                        </a>
                        <a
                            href="https://www.instagram.com/omexpvp/"
                            target="_blank"
                            className="w-full h-full"
                        >
                            <GameModeCard style="w-full max-h-[5rem] py-[1.69rem] flex items-center justify-center group">
                                <div className="flex items-center gap-2">
                                    <img src={instagram_logo} alt="V" draggable={false} className="h-[1.5625rem] w-auto" />
                                </div>
                            </GameModeCard>
                        </a>
                    </div>

                    <div className="w-full h-full max-h-[5rem] flex items-center gap-4">
                        <a
                            href="mailto:contact@omex.gg"
                            className="text-[0.875rem] font-semibold text-(--gray-200) leading-[125%] font-(family-name:--secondary-font)"
                        >
                            {t('joinCommunity.partner', { ns: "connections" })}
                            <span className="text-(--orange-500) font-semibold underline inline-flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block" viewBox="0 0 24 24">
                                    <g fill="currentColor">
                                        <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z" />
                                        <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z" />
                                    </g>
                                </svg>
                                <p className="mt-1">{t('joinCommunity.contact', { ns: "connections" })}</p>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
