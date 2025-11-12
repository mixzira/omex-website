import { BorderDec } from '@/components/BorderDec'
import Countdown from '@/components/Countdown'
import { PrimaryButton } from '@/components/PrimaryButton'
import VideoPlayer from '@/components/VideoPlayer'
import { releaseDate } from '@/config'
import { isIOS } from '@/lib/utils'
import imagotipo from '@assets/images/imagotipo.webp'
import video from '@assets/videos/hero_background.webm'
import { Trans, useTranslation } from "react-i18next"

export default function Hero() {
    const { t } = useTranslation(["hero", "common"]);
    const isCountdownActive = new Date() < releaseDate;

    return (
        <>
            <section className="relative w-full h-[calc(100vh-24rem)] md:h-[75rem] overflow-hidden">
                {!isIOS() && (
                    <VideoPlayer
                        src={video}
                        className="absolute inset-0 w-full h-full opacity-10 z-0 grayscale"
                        autoPlay
                        muted
                        loop
                    />
                )}
                <div className="container mx-auto max-w-(--safe-area) h-full flex flex-col items-center justify-center gap-4 px-2 md:px-0 relative z-10">
                    <img src={imagotipo} alt="OMEX" className="w-[18rem] md:w-[23.375rem] object-cover" />
                    <p className="text-center text-[1rem] md:text-[1.25rem] text-(--gray-100) font-semibold leading-[150%]">
                        <Trans i18nKey="title" ns="hero" components={{ B: <span className="font-(family-name:--primary-font) text-(--orange-500)" /> }}></Trans>
                    </p>
                    <PrimaryButton text={t('navigation.playNow', { ns: "common" })} style="md:block hidden px-8 py-2" onClick={() => {
                        window.open('fivem://connect/cfx.re/join/3zzzx8', '_blank')
                    }} />
                </div>
            </section>

            {isCountdownActive && (
                <section className="relative w-full md:h-[22rem] h-[16rem] bg-(--orange-500)">
                    <div className="container mx-auto max-w-(--safe-area) h-full flex flex-col items-center justify-center gap-4">
                        <div className="w-fit flex flex-col items-center justify-between gap-4">
                            <h3 className="text-center text-[1.25rem] text-(--orange-100) font-semibold leading-[150%]">
                                <Trans i18nKey="prepareForClosedBeta" ns="hero" components={{ B: <span className="font-(family-name:--primary-font) text-(--orange-900)" /> }}></Trans>
                            </h3>
                            <Countdown
                                targetDate={releaseDate}
                                className="flex items-center gap-4"
                                labels={{
                                    days: t('days', { ns: "hero" }),
                                    hours: t('hours', { ns: "hero" }),
                                    minutes: t('minutes', { ns: "hero" }),
                                    seconds: t('seconds', { ns: "hero" })
                                }}
                            />
                            <PrimaryButton text={t('navigation.joinCommunity', { ns: "common" })}
                                style="w-full px-8 py-2 bg-(--gray-900)! border-(--gray-900)! text-(--gray-200)! hover:border-(--gray-100)! hover:text-(--gray-100)! hover:bg-(--gray-700)! transition-all duration-150"
                                onClick={() => {
                                    window.open('https://discord.gg/yXVHdFyzqS', '_blank')
                                }}
                            />
                        </div>
                    </div>
                </section>
            )}

            <section className="relative w-full h-fit mt-8 md:mt-32 px-2 md:px-0">
                <div className="container mx-auto max-w-(--safe-area) h-fit flex flex-col items-center justify-center gap-4">
                    <div className="relative w-full max-w-[50rem] h-fit flex p-4 bg-(--orange-900) text-(--orange-200)">
                        <BorderDec side="tl" style="border-(--orange-500)" proportion={2} />
                        <BorderDec side="tr" style="border-(--orange-500)" proportion={2} />
                        <BorderDec side="bl" style="border-(--orange-500)" proportion={2} />
                        <BorderDec side="br" style="border-(--orange-500)" proportion={2} />
                        <p>
                            <Trans i18nKey="weAre" ns="hero" components={{ B: <span className="font-(family-name:--primary-font) text-[0.875rem] text-(--orange-500)" /> }}></Trans>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}