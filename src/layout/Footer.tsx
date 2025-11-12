import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation(["footer"]);

    return (
        <footer className="w-full h-fit bg-(--gray-700) md:mt-32 mt-8">
            <div className="container mx-auto max-w-(--safe-area) flex flex-col">
                <div className="flex flex-col pt-8 px-4 md:px-0 pb-4 gap-4">
                    <div className="flex flex-col md:flex-row items-center md:justify-between">
                        <div className="flex flex-col gap-1 items-center md:items-start">
                            <h3 className="text-2xl text-(--orange-500) text-center md:text-left">{t('slogan', { ns: "footer" })}</h3>
                            <menu className="flex items-center gap-2">
                                <a target="_blank" href="https://www.discord.gg/yXVHdFyzqS" aria-label="OMEX no Discord">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-(--gray-100) hover:text-(--orange-500) transition-colors duration-150' viewBox='0 0 24 24'>
                                        <path fill='currentColor'
                                            d='M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12' />
                                    </svg>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/omexpvp"
                                    aria-label="OMEX no Instagram">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-(--gray-100) hover:text-(--orange-500) transition-colors duration-150' viewBox='0 0 24 24'>
                                        <path fill='currentColor'
                                            d='M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5' />
                                    </svg>
                                </a>
                                <a target="_blank" href="https://www.tiktok.com/@omexpvp" aria-label="OMEX no TikTok">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-(--gray-100) hover:text-(--orange-500) transition-colors duration-150' viewBox='0 0 24 24'>
                                        <path fill='currentColor'
                                            d='M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48' />
                                    </svg>
                                </a>
                                <a target="_blank" href="https://x.com/omexpvp" aria-label="OMEX no X">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-(--gray-100) hover:text-(--orange-500) transition-colors duration-150' viewBox='0 0 24 24'>
                                        <g fill='currentColor'>
                                            <path d='M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z' />
                                            <path d='M3 2h5v2h-5zM16 22h5v-2h-5z' />
                                            <path d='M18.5 2h3.5L5 22h-3.5z' />
                                        </g>
                                    </svg>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/@omexpvp" aria-label="OMEX no Youtube">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-(--gray-100) hover:text-(--orange-500) transition-colors duration-150' viewBox='0 0 24 24'>
                                        <g fill='none'>
                                            <path
                                                d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
                                            <path fill='currentColor'
                                                d='M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z' />
                                        </g>
                                    </svg>
                                </a>
                                <a target="_blank" href="mailto:contact@omex.gg"
                                    aria-label="E-mail de contato do OMEX">
                                    <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-(--gray-100) hover:text-(--orange-500) transition-colors duration-150' viewBox='0 0 24 24'>
                                        <path fill='currentColor'
                                            d='M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h4q.425 0 .713.288T17 21t-.288.713T16 22zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15' />
                                    </svg>
                                </a>
                            </menu>
                        </div>
                    </div>
                    <p className="text-xs text-(--gray-200) font-semibold text-center md:text-left">
                        {t('disclaimer', { ns: "footer" })}
                    </p>
                </div>
                <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center md:justify-between py-4 border-t-2 border-(--gray-600) text-xs text-(--gray-200) font-semibold px-4 md:px-0">
                    <p>{t('copyright', { ns: "footer" })}</p>
                    <div className="flex items-center gap-8">
                        <Link className="underline hover:text-(--orange-500) transition-colors duration-150" to="/terms">{t('terms', { ns: "footer" })}</Link>
                        <Link className="underline hover:text-(--orange-500) transition-colors duration-150" to="/privacy">{t('privacy', { ns: "footer" })}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}