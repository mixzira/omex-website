import ItemsCard from "@/components/ItemsCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useMemo } from "react";

import comet6 from '@assets/images/items/comet6.webp';
import insurgent from '@assets/images/items/insurgent.webp';
import jb700 from '@assets/images/items/jb700.webp';
import kuruma2 from '@assets/images/items/kuruma2.webp';
import menacer from '@assets/images/items/menacer.webp';
import rebla from '@assets/images/items/rebla.webp';
import toros from '@assets/images/items/toros.webp';
import weapon_assaultrifle_mk2_omex from '@assets/images/items/weapon_assaultrifle_mk2_omex.webp';
import weapon_assaultsmg from '@assets/images/items/weapon_assaultsmg.webp';
import weapon_assaultsmg_omex from '@assets/images/items/weapon_assaultsmg_omex.webp';
import weapon_bottle from '@assets/images/items/weapon_bottle.webp';
import weapon_carbinerifle_mk2 from '@assets/images/items/weapon_carbinerifle_mk2.webp';
import weapon_knife from '@assets/images/items/weapon_knife.webp';
import weapon_knife_omex from '@assets/images/items/weapon_knife_omex.webp';
import weapon_machete from '@assets/images/items/weapon_machete.webp';
import weapon_pistolmk2_omex from '@assets/images/items/weapon_pistolmk2_omex.webp';
import weapon_revolver_mk2 from '@assets/images/items/weapon_revolver_mk2.webp';
import weapon_specialcarbine_mk2_omex from '@assets/images/items/weapon_specialcarbine_mk2_omex.webp';
import xls2 from '@assets/images/items/xls2.webp';
import zr380 from '@assets/images/items/zr380.webp';

import { BorderDec } from "@/components/BorderDec";
import personalizeLight from '@assets/images/lights.webp';
import randomTexture from '@assets/images/texture-01.webp';

import { Trans, useTranslation } from "react-i18next";

export default function Personalize() {
    const { t } = useTranslation(["personalize"]);

    const items = useMemo(
        () => [
            { image: weapon_specialcarbine_mk2_omex, special: true },
            { image: weapon_carbinerifle_mk2 },
            { image: insurgent },
            { image: weapon_pistolmk2_omex, special: true },
            { image: comet6 },
            { image: kuruma2 },
            { image: weapon_assaultrifle_mk2_omex, special: true },
            { image: menacer },
            { image: weapon_revolver_mk2 },
            { image: weapon_assaultsmg_omex, special: true },
            { image: zr380 },
            { image: weapon_assaultsmg },
            { image: weapon_knife_omex, special: true },
            { image: weapon_bottle },
            { image: jb700 },
            { image: weapon_knife },
            { image: weapon_machete },
            { image: rebla },
            { image: toros },
            { image: xls2 },
        ],
        []
    )

    return (
        <section className="relative w-full h-fit mt-8 md:mt-40 px-2 md:px-0">
            <div className="relative container mx-auto max-w-(--safe-area) h-fit flex flex-col items-center gap-8">
                <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
                    <div className="relative w-full h-fit pt-8 flex flex-col gap-2 items-center">
                        <img src={personalizeLight} alt="Personalize" className="absolute -top-4 md:-top-22 left-0 md:left-7.5 w-[75.8125rem] h-auto object-cover" />
                        <h2 className="text-[1.5rem] md:text-[3rem] text-(--gray-50) leading-[90%] uppercase z-[1]">{t('title', { ns: "personalize" })}</h2>
                        <p className="md:text-left text-center text-[0.875rem] md:text-[1rem] font-semibold text-(--gray-100) leading-[125%] font-(family-name:--secondary-font) z-[1]">
                            <Trans i18nKey="description" ns="personalize" components={{ B: <span className="font-(family-name:--primary-font) text-(--orange-500)" /> }}></Trans>
                        </p>
                    </div>
                    <div className="w-full h-fit flex gap-4 justify-center z-[1]">
                        <div className="relative w-fit h-fit px-4 py-2 bg-(--orange-900) text-[1rem] text-(--orange-100) leading-[90%] font-(family-name:--primary-font)">
                            <BorderDec side="tl" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="tr" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="bl" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="br" style="border-(--orange-500)" proportion={2} />
                            <p className="mt-1">{t('vehicles', { ns: "personalize" })}</p>
                        </div>
                        <div className="relative w-fit h-fit px-4 py-2 bg-(--orange-900) text-[1rem] text-(--orange-100) leading-[90%] font-(family-name:--primary-font)">
                            <BorderDec side="tl" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="tr" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="bl" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="br" style="border-(--orange-500)" proportion={2} />
                            <p className="mt-1">{t('weapons', { ns: "personalize" })}</p>
                        </div>
                        <div className="relative w-fit h-fit px-4 py-2 bg-(--orange-900) text-[1rem] text-(--orange-100) leading-[90%] font-(family-name:--primary-font)">
                            <BorderDec side="tl" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="tr" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="bl" style="border-(--orange-500)" proportion={2} />
                            <BorderDec side="br" style="border-(--orange-500)" proportion={2} />
                            <p className="mt-1">{t('clothes', { ns: "personalize" })}</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-fit overflow-hidden flex flex-col gap-4
                    mask-x-from-85%  mask-x-to-95%
                ">
                    {Array.from({ length: 2 }).map((_, rowIndex) => {
                        const rowItems = items.slice(rowIndex * 6, rowIndex * 6 + 6)
                        const doubledRowItems = [...rowItems, ...rowItems]
                        const animationClass =
                            rowIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"

                        return (
                            <div key={rowIndex} className={`flex w-max gap-4 z-[1] ${animationClass}`}>
                                {doubledRowItems.map((item, index) => (
                                    <ItemsCard key={index} special={item.special} style="group transition-all duration-350 ease-in-out">
                                        <div className={`
                                        absolute top-[50%] left=[50%] translate-[-50%] w-[5rem] h-[5rem] bg-(--orange-500) rounded-full z-[2] blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-250 ease-in-out
                                    `} />
                                        <img src={randomTexture} className={`
                                        absolute w-full h-full object-cover z-[3] group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-250 ease-in-out grayscale opacity-15
                                        ${item.special ? 'opacity-40 grayscale-26' : ''}
                                    `} />
                                        <img src={item.image} loading="lazy" decoding="async" draggable={false} className={`
                                        md:w-[14rem] w-[8rem] h-auto object-cover z-[4] group-hover:scale-110 transition-all duration-150 ease-in-out
                                    `} />
                                    </ItemsCard>
                                ))}
                            </div>
                        )
                    })}
                </div>
                <PrimaryButton text={t('visitShop', { ns: "personalize" })} style="w-fit px-4" onClick={() => {
                    window.open('https://shop.omex.gg', '_blank')
                }} />
            </div>
        </section>
    )
}