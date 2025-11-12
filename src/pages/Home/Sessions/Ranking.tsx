import rankingImage from '@assets/images/ranking.webp'
import { Trans, useTranslation } from "react-i18next";

export default function Ranking() {
    const { t } = useTranslation(["ranking"]);

    return (
        <section className="relative w-full h-fit mt-8 md:mt-40 px-2 md:px-0">
            <div className="relative container mx-auto max-w-(--safe-area) h-fit flex flex-col justify-center gap-4">
                <img src={rankingImage} alt="Ranking" className="absolute top-[4.125rem] left-[22rem] md:w-[60rem] object-cover w-0" />
                <div className="w-full flex items-center justify-center">
                    <h2 className="text-[2.5rem] md:text-[14.125rem] text-(--gray-50) leading-[90%] opacity-5">RANKING</h2>
                </div>
                <div className="w-fit max-w-[28rem] flex flex-col gap-[2rem]">
                    <div className="flex flex-col gap-[0.625rem]">
                        <h3 className="text-[1.5rem] text-(--gray-50) leading-[90%] uppercase">{t('buildYourLegacy', { ns: "ranking" })}</h3>
                        <p className="text-[1rem] font-semibold text-(--gray-100) leading-[125%] font-(family-name:--secondary-font)">
                            <Trans i18nKey="buildYourLegacy.description" ns="ranking" components={{ B: <span className="font-(family-name:--primary-font) text-(--orange-500)" /> }}></Trans>
                        </p>
                    </div>
                    <div className="flex flex-col gap-[0.625rem]">
                        <h4 className="text-[1.25rem] text-(--gray-50) leading-[90%] uppercase">{t('levelsProgression', { ns: "ranking" })}</h4>
                        <p className="text-[1rem] font-semibold text-(--gray-200) leading-[125%] font-(family-name:--secondary-font)">
                            <Trans i18nKey="levelsProgression.description" ns="ranking" components={{ B: <span className="font-(family-name:--primary-font) text-(--orange-500)" /> }}></Trans>
                        </p>
                    </div>
                    <div className="flex flex-col gap-[0.625rem]">
                        <h4 className="text-[1.25rem] text-(--gray-50) leading-[90%] uppercase">{t('eloSystem', { ns: "ranking" })}</h4>
                        <p className="text-[1rem] font-semibold text-(--gray-200) leading-[125%] font-(family-name:--secondary-font)">
                            <Trans i18nKey="eloSystem.description" ns="ranking" components={{ B: <span className="font-(family-name:--primary-font) text-(--orange-500)" /> }}></Trans>
                        </p>
                    </div>
                    <div className="flex flex-col gap-[0.625rem]">
                        <h4 className="text-[1.25rem] text-(--gray-50) leading-[90%] uppercase">{t('achievementsAndChallenges', { ns: "ranking" })}</h4>
                        <p className="text-[1rem] font-semibold text-(--gray-200) leading-[125%] font-(family-name:--secondary-font)">
                            <Trans i18nKey="achievementsAndChallenges.description" ns="ranking" components={{ B: <span className="font-(family-name:--primary-font) text-(--orange-500)" /> }}></Trans>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}