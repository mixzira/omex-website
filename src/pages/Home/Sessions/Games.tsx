import GameModeCard from "@/components/GameModeCard";
import { BorderDec } from "@/components/BorderDec";

import free_fallBackground from '@assets/images/background/free_fall.webp';
import dominationBackground from '@assets/images/background/domination.webp';
import collapseBackground from '@assets/images/background/collapse.webp';
import confrontationBackground from '@assets/images/background/confrontation.webp';
import { Trans, useTranslation } from "react-i18next";

export default function Games() {
    const { t } = useTranslation(["games"]);
    return (
        <section className="relative w-full h-fit mt-8 md:mt-32 px-2 md:px-0">
            <div className="container mx-auto max-w-(--safe-area) h-full flex flex-col items-center justify-center gap-8">
                <div className="w-full flex flex-col gap-4 items-center justify-center">
                    <h3 className="text-[1.5rem] md:text-[3rem] text-(--gray-50) leading-[90%]">
                        <Trans i18nKey="title" ns="games" components={{ B: <span className="text-(--orange-500)" /> }}></Trans>
                    </h3>
                    <p className="text-[0.875rem] md:text-[1rem] text-center md:text-left font-semibold text-(--gray-100) leading-[125%] font-(family-name:--secondary-font)">{t('description', { ns: "games" })}</p>
                </div>
                <div className="w-full h-fit md:h-[50rem] flex md:flex-row flex-col gap-4">
                    <div className="relative w-full md:h-full h-fit flex flex-col gap-4">
                        <div className="relative w-full h-fit md:h-full flex md:flex-row flex-col gap-4">
                            <GameModeCard style="md:max-w-[18.75rem] flex flex-col-reverse md:flex-row md:justify-start md:items-end group">
                                <img src={confrontationBackground} alt="Queda Livre" draggable={false} className="absolute top-0 left-0 w-full h-full object-cover z-[2] grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-100 group-hover:w-[107%] group-hover:h-[107%] transition-all duration-350 ease-in-out" />


                                <div className="absolute bottom-0 left-0 w-full h-0 md:group-hover:h-[4.125rem] bg-(--gray-700) z-[2] transition-all delay-75 duration-350 ease-in-out">
                                    <BorderDec side="tr" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
                                </div>
                                <div className="absolute bottom-0 left-0 w-0 h-[13.5rem] md:group-hover:w-[3.125rem] bg-(--gray-700) z-[2] transition-all delay-75 duration-350 ease-in-out group">
                                    <BorderDec side="tl" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4] opacity-0 group-hover:opacity-100 transition-all duration-350 ease-in-out" proportion={4} />
                                    <BorderDec side="tr" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
                                </div>


                                <h3 className="text-[1.5rem] font-extrabold md:tracking-tight text-(--gray-50) group-hover:text-(--orange-500) leading-[90%] md:[writing-mode:vertical-rl] md:rotate-180 uppercase transition-colors duration-350 ease-in-out z-[3]">{t('modes.confrontation.title', { ns: "games" })}</h3>
                                <p className="text-[0.875rem] font-semibold text-(--gray-200) group-hover:text-(--gray-50) leading-[125%] font-(family-name:--secondary-font) transition-colors duration-350 ease-in-out z-[3]">{t('modes.confrontation.description', { ns: "games" })}</p>
                            </GameModeCard>
                            <GameModeCard style="flex-col justify-end group pt-8 md:pt-0">
                                <img src={collapseBackground} alt="Queda Livre" draggable={false} className="absolute top-0 left-0 w-full h-full object-cover z-[2] grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-100 group-hover:w-[107%] group-hover:h-[107%] transition-all duration-350 ease-in-out" />


                                <div className="absolute bottom-0 left-0 w-full h-0 md:group-hover:h-[6.5rem] bg-(--gray-700) z-[2] transition-all delay-75 duration-350 ease-in-out">
                                    <BorderDec side="tl" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
                                    <BorderDec side="tr" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
                                </div>


                                <p className="text-[0.875rem] font-semibold text-(--gray-200) group-hover:text-(--gray-50) leading-[125%] font-(family-name:--secondary-font) transition-colors duration-350 ease-in-out z-[3]">{t('modes.collapse.description', { ns: "games" })}</p>
                                <h3 className="text-[1.5rem] font-extrabold tracking-tight text-(--gray-50) group-hover:text-(--orange-500) leading-[90%] uppercase transition-colors duration-350 ease-in-out z-[3]">{t('modes.collapse.title', { ns: "games" })}</h3>
                            </GameModeCard>
                        </div>

                        <GameModeCard style="flex-col justify-end group">
                            <img src={dominationBackground} alt="Queda Livre" draggable={false} className="absolute top-0 left-0 w-full h-full object-cover z-[2] grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-100 group-hover:w-[107%] group-hover:h-[107%] transition-all duration-350 ease-in-out" />

                            <div className="absolute bottom-0 left-0 w-full h-0 md:group-hover:h-[6.5rem] bg-(--gray-700) z-[2] transition-all delay-75 duration-350 ease-in-out">
                                <BorderDec side="tl" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
                                <BorderDec side="tr" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
                            </div>


                            <p className="max-w-[33rem] text-[0.875rem] font-semibold text-(--gray-200) group-hover:text-(--gray-50) leading-[125%] font-(family-name:--secondary-font) transition-colors duration-350 ease-in-out z-[3]">{t('modes.domination.description', { ns: "games" })}</p>
                            <h3 className="text-[1.5rem] font-extrabold tracking-tight text-(--gray-50) group-hover:text-(--orange-500) leading-[90%] uppercase transition-colors duration-350 ease-in-out z-[3]">{t('modes.domination.title', { ns: "games" })}</h3>
                        </GameModeCard>
                    </div>

                    <GameModeCard style="flex-col md:justify-end md:items-center md:max-w-[26.5rem] group">
                        <img src={free_fallBackground} alt="Queda Livre" draggable={false} className="absolute top-0 left-0 w-full h-full object-cover z-[2] grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-100 group-hover:w-[107%] group-hover:h-[107%] transition-all duration-350 ease-in-out" />


                        <div className="absolute bottom-0 left-0 w-full h-0 md:group-hover:h-[7.5rem] bg-(--gray-700) z-[2] transition-all delay-75 duration-350 ease-in-out">
                            <BorderDec side="tl" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
                            <BorderDec side="tr" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
                        </div>


                        <p className="text-[0.875rem] font-semibold text-(--gray-200) group-hover:text-(--gray-50) leading-[125%] font-(family-name:--secondary-font) text-left md:text-center transition-colors duration-350 ease-in-out z-[3]">{t('modes.free_fall.description', { ns: "games" })}</p>
                        <h3 className="text-[1.5rem] font-extrabold tracking-tight text-(--gray-50) group-hover:text-(--orange-500) leading-[90%] uppercase transition-colors duration-350 ease-in-out z-[3]">{t('modes.free_fall.title', { ns: "games" })}</h3>
                    </GameModeCard>
                </div>
            </div>
        </section>
    )
}